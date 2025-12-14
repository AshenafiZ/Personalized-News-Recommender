import { useState, useCallback } from 'react'
import { newsApi } from '../utils/api'
import toast from 'react-hot-toast'

export function useNews() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  const getRecommendations = useCallback(async (interests) => {
    setLoading(true)
    try {
      toast.loading('Finding your perfect articles...', { id: 'news' })
      const data = await newsApi.getRecommendations(interests)
      setArticles(data.articles)
      toast.success(`Found ${data.articles.length} articles!`, { id: 'news' })
    } catch (error) {
      toast.error('Failed to get recommendations')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return { articles, loading, getRecommendations }
}
