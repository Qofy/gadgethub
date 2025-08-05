import Header from './component/Header'
import './App.css'
// FIX: Use react-router-dom instead of react-router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./component/pages/Home"
import Categories from './component/pages/Categories'
import Deal from './component/pages/Deal'
import About from './component/pages/About'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App