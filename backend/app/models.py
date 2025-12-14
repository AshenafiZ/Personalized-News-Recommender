from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from .database import Base

class Article(Base):
    __tablename__ = "articles"
    
    id = Column(Integer, primary_key=True, index=True)
    article_id = Column(String, unique=True, index=True)
    title = Column(String(500), nullable=False)
    description = Column(Text)
    url = Column(String(500), nullable=False)
    source = Column(String(100))
    category = Column(String(50), default="general")
    keywords = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
