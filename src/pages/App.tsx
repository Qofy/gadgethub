import '../App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Categories from './Categories'
import Deal from './Deal'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import ViewAllProduct from '../component/ViewAllProduct'
import ViewProductCategories from '../categories/ViewProductCategories'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view-product' element={<ViewAllProduct/>}/>
        <Route path="/categories" element={<Categories />} />
        <Route path="/deal" element={<Deal />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cat-all-product" element={<ViewAllProduct />} />
        
        {/* NEW: Dynamic route for category-specific products */}
        <Route path="/cat-products/:category" element={<ViewProductCategories />} />
        
        {/* Catch-all route should be last */}
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App