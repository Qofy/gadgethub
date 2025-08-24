import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/header.css";
import Logo from "../home/Logo";

function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   
  const handleUserClick = () => {
    navigate('/login');
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <Logo conName="logo-container" logo="logo" spanName="title"/>
      
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/deal">Deal</Link>
        <Link to="/about">About</Link>
      </nav>

      {/* Search - visible on desktop */}
      <input 
        type="search" 
        placeholder="Search gadgets..." 
        className="desktop-search"
      />

      {/* Mobile Search */}
      <input 
        type="search" 
        placeholder="Search..." 
        className="mobile-search"
      />

      {/* Desktop Icons */}
      <div className="icons desktop-icons">
        <User className="icon" onClick={handleUserClick} />
        <ShoppingCart className="icon" />
      </div>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
      </button>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="mobile-nav-overlay" onClick={closeMenu}>
          <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/categories" onClick={closeMenu}>Categories</Link>
            <Link to="/deal" onClick={closeMenu}>Deal</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <div className="mobile-nav-icons">
              <button onClick={() => { handleUserClick(); closeMenu(); }}>
                <User className="icon" /> Account
              </button>
              <button onClick={closeMenu}>
                <ShoppingCart className="icon" /> Cart
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;