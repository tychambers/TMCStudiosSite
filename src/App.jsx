import { useState } from 'react'
import './styles/App.css'
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home'
import Navbar from './components/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="base-background">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </HashRouter>
    </div>
  )
}

export default App
