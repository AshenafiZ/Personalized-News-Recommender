import httpx
import os
import nltk
from nltk.corpus import stopwords
from collections import Counter
import re
from .models import Article

# NLTK setup
try:
    nltk.data.find('corpora/stopwords')
except LookupError:
    nltk.download('stopwords', quiet=True)

STOP_WORDS = set(stopwords.words('english'))

def extract_keywords(text: str, top_n: int = 10) -> list[str]:
    if not text:
        return []
    words = re.findall(r'\b[a-zA-Z]{3,}\b', text.lower())
    words = [w for w in words if w not in STOP_WORDS and len(w) > 2]
    return [word for word, _ in Counter(words).most_common(top_n)]

async def fetch_and_store_articles(db):
    """Fetch from NewsAPI top-headlines - FIXED unique constraint"""
    api_key = os.getenv("NEWS_API_KEY")
    if not api_key:
        raise ValueError("NEWS_API_KEY not found in .env")
    
    # ⚠️ CRITICAL: Clear old articles FIRST
    print("🗑️ Clearing old articles...")
    db.query(Article).delete()
    db.commit()
    
    async with httpx.AsyncClient(timeout=30.0) as client:
        params = {
            "country": "us",
            "apiKey": api_key,
            "pageSize": 30
        }
        
        print("📰 Fetching real US headlines...")
        response = await client.get("https://newsapi.org/v2/top-headlines", params=params)
        response.raise_for_status()
        data = response.json()
        
        articles = []
        for item in data.get("articles", []):
            if not item.get("title") or not item.get("url"):
                continue
                
            text = f"{item['title']} {item.get('description', '')}"
            keywords = extract_keywords(text)
            
            
            article = Article(
                article_id=item["url"],  
                title=item["title"],
                description=item.get("description", ""),
                url=item["url"],
                source=item.get("source", {}).get("name", "Unknown"),
                category="general",  
                keywords=",".join(keywords)
            )
            db.add(article)
            articles.append(article)
        
        db.commit()
        print(f"✅ Stored {len(articles)} REAL articles")
        return len(articles)
