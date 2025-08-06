import { Truck, Shield, Star } from "lucide-react";
import "../style/home.css";
function Header() {
  return (
   <div className="main-container">
    <section>
      <h1 className="main-title">
        Smart Gadgets for <span>Mordern Homes</span>
      </h1>
      <p className="">
        Discover cutting-edge home gadgets that make your life easier, smarter, and more connected. From smart speakers to wireless chargers, we have everything you need.
      </p>
      <button className="main-btn btn">Shop Now &#8594;</button>
      <button className="main-btb btn">View Catalog</button>
      <div className="features">
        <div className="feature-item">
          <Star/>
          <p>4.8/5 Customer Rating</p>
        </div>
        <div className="feature-item">
          <Shield/>
          <p>"-Years Warranty</p>
        </div>
        <div className="feature-item">
          <Truck/>
          <p>Free Shipping on Orders Over $50</p>
        </div>
      </div>
    </section>

   </div>
  );
}

export default Header;