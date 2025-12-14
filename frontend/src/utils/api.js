const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export const newsApi = {
  ingestNews: async () => {
    const res = await fetch(`${API_BASE}/api/ingest-news`, { method: 'POST' })
    if (!res.ok) throw new Error('Failed to ingest news')
    return res.json()
  },
  getRecommendations: async (interests) => {
    const res = await fetch(`${API_BASE}/api/recommend`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ interests })
    })
    if (!res.ok) throw new Error('Failed to get recommendations')
    return res.json()
  }
}
