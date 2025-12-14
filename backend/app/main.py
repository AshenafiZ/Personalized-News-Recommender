from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import os
from dotenv import load_dotenv

# Local imports
from .database import get_db, Base, engine
from .models import Article
from .schemas import RecommendRequest, RecommendationResponse
from .news_service import fetch_and_store_articles
from .recommender import recommend_articles

load_dotenv()
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Personalized News Recommender")

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.post("/api/ingest-news")
async def ingest_news(db: Session = Depends(get_db)):
    """Fetch & store 30 real US headlines"""
    try:
        count = await fetch_and_store_articles(db)
        return {"status": "success", "ingested": count}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/recommend", response_model=RecommendationResponse)
async def get_recommendations(request: RecommendRequest, db: Session = Depends(get_db)):
    """Get personalized recommendations"""
    if not request.interests:
        raise HTTPException(status_code=400, detail="Interests required")
    
    scored_articles = recommend_articles(request.interests, db)
    articles = [
        {
            "id": article.id,
            "title": article.title,
            "description": article.description or "",
            "url": article.url,
            "source": article.source or "Unknown",
            "category": article.category,
            "keywords": article.keywords,
            "score": score
        }
        for article, score in scored_articles
    ]
    
    return RecommendationResponse(articles=articles, interests=request.interests)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
