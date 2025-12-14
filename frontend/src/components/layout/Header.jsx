export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-xl text-white font-black text-xl">
            N
          </div>
          <h1 className="text-3xl font-black netflix-gradient">NewsFlix</h1>
        </div>
      </div>
    </header>
  )
}
