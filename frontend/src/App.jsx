import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import './index.css'

function App() {
  return (
    <>
      <Home />
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(0,0,0,0.9)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white'
          }
        }}
      />
    </>
  )
}

export default App
