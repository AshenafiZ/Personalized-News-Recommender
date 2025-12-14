import { useState } from 'react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Card, CardContent, CardHeader } from './ui/Card'

export default function InterestInput({ onSubmit, loading }) {
  const [input, setInput] = useState('')
  const [interests, setInterests] = useState([])

  const handleSubmit = () => {
    const newInterests = input.split(',').map(i => i.trim()).filter(Boolean)
    const updated = [...interests, ...newInterests]
    setInterests(updated)
    setInput('')
    onSubmit(updated)
  }

  const removeInterest = (interestToRemove) => {
    setInterests(prev => prev.filter(i => i !== interestToRemove))
  }

  return (
    <Card>
      <CardContent>
        <CardHeader>
          <h2 className="text-3xl md:text-4xl font-black netflix-gradient">
            Your Interests
          </h2>
          <p className="text-xl text-white/70">
            Tell us what you love to read about
          </p>
        </CardHeader>

        <div className="space-y-6">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="AI, technology, sports, business, health..."
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            disabled={loading}
          />

          <Button
            onClick={handleSubmit}
            disabled={loading || !input.trim()}
            size="lg"
            className="w-full"
          >
            {loading ? '🔄 Finding Articles...' : '🎯 Get Recommendations'}
          </Button>

        </div>

        {interests.length > 0 && (
          <div className="mt-8 p-6 bg-white/5 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Selected:</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, i) => (
                <button
                  key={i}
                  onClick={() => removeInterest(interest)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium transition-all border border-white/20"
                >
                  {interest} <span className="ml-1">×</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
