import { Button } from './ui/Button'
import { Card, CardContent } from './ui/Card'

export default function ArticleCard({ article, rank, className }) {
  return (
    <Card className={className}>
      <CardContent>
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-lg">
            #{rank}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-2xl font-bold netflix-gradient">
                {Math.round(article.score * 100)}%
              </span>
              <span className="text-sm text-white/60 uppercase tracking-wide">Match</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 leading-tight hover:text-emerald-400 transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        {article.description && (
          <p className="text-lg text-white/70 mb-6 leading-relaxed line-clamp-3">
            {article.description}
          </p>
        )}
        
        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold">
            {article.source || 'News'}
          </div>
          <Button 
            as="a"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="sm"
            className="group hover:scale-105"
          >
            <span>Read Article</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
