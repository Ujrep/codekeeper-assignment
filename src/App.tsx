import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Show from './pages/Show'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-electric-blue to-black pt-24">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Show />} />
      </Routes>
    </div>
  )
}

export default App
