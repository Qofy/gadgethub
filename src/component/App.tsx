import '../App.css'
import Header from './Header'

// FIX: Use react-router-dom instead of react-router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Categories from '../component/Categories'
import Deal from './Deal'
import About from '../home/About'
import Login from '../home/Login'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  )
}

export default App