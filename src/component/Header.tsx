import { ShoppingCart,  User} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "../style/header.css";
import Logo from "./Logo";

function Header() {
   const navigate = useNavigate();
   
   const handleUserClick = () =>{
      navigate('/login');
   }
  return (
    <header className="header">
      <Logo/>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/deal">Deal</Link>
        <Link to="/about">About</Link>
      </nav>
        <input type="search" placeholder="Search gadgets..." />

      <div className="icons">
        <User className="icon" onClick={handleUserClick} />
        <ShoppingCart className="icon" />
      </div>
    </header>
  );
}

export default Header;