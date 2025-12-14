from pydantic import BaseModel
from typing import List

class RecommendRequest(BaseModel):
    interests: List[str]

class ArticleResponse(BaseModel):
    id: int
    title: str
    description: str
    url: str
    source: str
    category: str
    keywords: str
    score: float = 0.0

class RecommendationResponse(BaseModel):
    articles: List[ArticleResponse]
    interests: List[str]
