import '../App.css'

// FIX: Use react-router-dom instead of react-router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Categories from './Categories'
import Deal from './Deal'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import ViewAllProduct from '../component/ViewAllProduct'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/view-product' element={<ViewAllProduct/>}/>
        <Route path="/categories" element={<Categories />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>

  )
}

export default App