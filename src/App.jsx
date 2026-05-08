import Navbar from './components/Navbar'
import WebOnlyPage from './pages/WebOnlyPage'
import WebPriser from './pages/WebPriser'

function CurrentPage() {
  const path = window.location.pathname
  if (path === '/priser') return <WebPriser />
  return <WebOnlyPage />
}

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <CurrentPage />
    </main>
  )
}
