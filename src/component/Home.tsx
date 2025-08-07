import { Truck, Shield, Star } from "lucide-react";
import "../style/home.css";
// import Product from "../assets/modern.jpg"

function Header() {
  return (
   <div className="main-container">
    <div className="header-container">
<section className="main-section">
      <h1 className="main-title">
        Smart Gadgets for <span>Mordern Homes</span>
      </h1>
      <p className="main-description">
        Discover cutting-edge home gadgets that make your life easier, smarter, and more connected. From smart speakers to wireless chargers, we have everything you need.
      </p>
      <div className="btn">
      <button className="main-btn1 btns">Shop Now &#8594;</button>
      <button className="main-btn btns">View Catalog</button>
      </div>
      <div className="features">
        <div className="feature-item">
          <Star/>
          <p>4.8/5 Customer Rating</p>
        </div>
        <div className="feature-item">
          <Shield/>
          <p>Years Warranty</p>
        </div>
        <div className="feature-item">
          <Truck/>
          <p>Free Shipping </p>
        </div>
      </div>
      
    </section>
    {/* <div className="product-icon">
        <span>50+</span>
        <p>product</p>
      </div> */}
      <div className="product-image">
      </div>
    </div>
    

   </div>
  );
}

export default Header;