from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from typing import List
from .models import Article

def recommend_articles(interests: List[str], db) -> List[Article]:
    """Advanced TF-IDF similarity matching"""
    articles = db.query(Article).all()
    if not articles:
        return []
    
    # Prepare data for TF-IDF
    user_text = " ".join(interests)
    article_texts = []
    
    for article in articles:
        keywords = article.keywords.split(",") if article.keywords else []
        article_texts.append(" ".join(keywords))
    
    # Calculate similarity
    vectorizer = TfidfVectorizer(lowercase=True, max_features=100)
    texts = [user_text] + article_texts
    tfidf_matrix = vectorizer.fit_transform(texts)
    
    similarities = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:])[0]
    
    # Sort by similarity score
    scored_articles = [(articles[i], float(similarities[i])) for i in range(len(articles))]
    return sorted(scored_articles, key=lambda x: x[1], reverse=True)[:5]
