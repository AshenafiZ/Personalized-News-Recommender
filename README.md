# 📰 NewsFlix - AI-Powered News Recommender

![NewsFlix Demo](https://via.placeholder.com/1200x600/0f766e/ffffff?text=NewsFlix+-+AI+News+Recommender)

Personalized news recommendations using **FastAPI**, **React + Vite**, **PostgreSQL**, **NewsAPI**, and **NLP (TF-IDF)**. Netflix-style UI with green accents.

[![Backend](https://img.shields.io/badge/FastAPI-Production%20Ready-brightgreen)](https://fastapi.tiangolo.com)
[![Frontend](https://img.shields.io/badge/React%2BVite-Tailwind-brightgreen)](https://vitejs.dev)
[![Database](https://img.shields.io/badge/PostgreSQL-Render-brightgreen)](https://render.com)

## 🚀 Quick Start (2 Minutes)

### Prerequisites
- Node.js 18+
- Python 3.10+
- PostgreSQL (or use your Render DB)
- [NewsAPI Key](https://newsapi.org/register) (Free)

### 1. Clone & Install

git clone https://github.com/AshenafiZ/Personalized-News-Recommender.git
cd Personalized-News-Recommender


### 2. Backend Setup

cd backend
python -m venv venv
source venv/bin/activate # Windows: venv\Scripts\activate
pip install -r requirements.txt

Copy env

### Start server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000


### 3. Frontend Setup (New Terminal)

cd ../frontend
npm install
npm run dev


### 4. First Run

Backend terminal: Ingest news
curl -X POST http://localhost:8000/api/ingest-news

Frontend: localhost:5173
Enter: "AI, technology" → Get recommendations!


## 🛠 Architecture

NewsAPI (Top Headlines US)
↓
NLTK Keyword Extraction
↓
PostgreSQL (Render)
↓
FastAPI + TF-IDF Similarity
↓
React + Vite + Tailwind (Green Netflix UI)

## 🗄 Database Setup

**Option 1: Render (Free Tier)**
DATABASE_URL=postgresql://user:pass@host:port/news_recommender

**Option 2: Local PostgreSQL**
psql -U postgres -c "CREATE DATABASE news_recommender;"


## 🌐 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/api/ingest-news` | POST | Fetch 30 real articles |
| `/api/recommend` | POST | `{ "interests": ["AI", "tech"] }` |

**Test:** `http://localhost:8000/docs` (Swagger UI)

## 🔧 Environment Variables

**backend/.env**
DATABASE_URL=postgresql://...
NEWS_API_KEY=your_newsapi_key_here


## 🤝 Contributing

1. Fork repo
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/amazing`)
5. Open Pull Request

## 📄 License
MIT License - Free to use in commercial projects.

## 🙌 Show Support
⭐ Star this repo!  
🐙 Follow for more full-stack projects!

**Built with ❤️ by Ashenafi Zewdie**
