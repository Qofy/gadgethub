import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../style/header.css";
import Logo from "../home/Logo";

interface HeaderProps {
  cartCount?: number;
}

function Header({ cartCount = 0 }: HeaderProps) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleUserClick = () => {
    navigate('/login');
  }

  const handleCartClick = () => {
    navigate('/cart');
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <Logo conName="logo-container" logo="logo" spanName="title" />
      
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/categories">Categories</NavLink>
        <NavLink className="nav-link" to="/deal">Deal</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
      </nav>

      {/* Search - visible on desktop */}
      <input type="search" placeholder="Search gadgets..." className="desktop-search" />

      {/* Mobile Search */}
      <input type="search" placeholder="Search..." className="mobile-search" />

      {/* Desktop Icons */}
      <div className="icons desktop-icons">
        <User className="icon" onClick={handleUserClick} />
        <div className="cart-container" onClick={handleCartClick}>
          <ShoppingCart className="icon" />
          {cartCount > 0 && <div className="cart-add-icon">{cartCount}</div>}
        </div>
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
                <User className="icon" />
                Account
              </button>
              <button onClick={() => { handleCartClick(); closeMenu(); }}>
                <div className="cart-container">
                  <ShoppingCart className="icon" />
                  {cartCount > 0 && <div className="cart-add-icon">{cartCount}</div>}
                </div>
                Cart
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;