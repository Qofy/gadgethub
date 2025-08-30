import "../style/home.css";
import Feature from "../home/Feature";
import Recommended from "../home/Recommended";
import HomeHeader from "../component/HomeHeader";
import Header from "./Header"; 
import Footer from "./Footer";
import { useState } from "react";


function Home() { // Changed function name from Header to Home
  const [cartCount, setCartCount] = useState(0); // Removed TypeScript annotation for JS compatibility

  return (
    <div className="hom-container">
      <Header cartCount={cartCount} /> {/* Changed prop name to match */}
      <HomeHeader />
      <Feature  featureContainer="featured-container" 
        h1="Featured Product" 
        p="Discover our most popular gadgets that customers love. Each product comes with our quality guarantee and fast shipping"                 
        featuredItem="featured-item" 
        featuredList="featured-list" 
        featuredImageContainer="featured-image-container" 
        featuredImage="featured-image" 
        featuredDisc="featued-dis" 
        featuredBtn="featured-btn" 
        featuredView="featured-view"
        setCartCount={setCartCount}
       
      />  
      <Recommended />
      <Footer />
    </div>
  );
}

export default Home;