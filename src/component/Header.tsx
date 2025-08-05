import { ShoppingCart,  User} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";
function Header() {
   const navigate = useNavigate();
   
   const handleUserClick = () =>{
      navigate('/login');
   }
  return (
    <header className="header">
      <div className="logo-container">
      <span className="logo">
        G
      </span>

      <span className="title">
        GadgetHub
      </span>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/deal">Deal</Link>
        <Link to="/about">About</Link>
      </nav>
        <input type="search" placeholder="Search gadgets..." />

      <div className="icons">
        <ShoppingCart className="icon" />
        <User className="icon" onClick={handleUserClick} />
      </div>
    </header>
  );
}

export default Header;