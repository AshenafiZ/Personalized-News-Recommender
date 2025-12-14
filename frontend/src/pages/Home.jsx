import Header from '../components/layout/Header'
import InterestInput from '../components/InterestInput'
import ArticleCard from '../components/ArticleCard'
import { useNews } from '../hooks/useNews'

export default function Home() {
  const { articles, loading, getRecommendations } = useNews()

  return (
    <div className="min-h-screen pt-20 pb-12">
      <Header />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black netflix-gradient mb-8 leading-none">
            NewsFlix
          </h1>
          <p className="text-2xl md:text-3xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-16">
            AI-powered personalized news recommendations
          </p>
        </div>

        {/* Input Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <InterestInput 
            onSubmit={getRecommendations} 
            loading={loading} 
          />
        </div>

        {/* Results */}
        {articles.length > 0 && (
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Your Recommendations
              </h2>
              <p className="text-xl text-white/60">
                Top matches based on your interests
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  rank={index + 1}
                  className="animate-fade-in"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
