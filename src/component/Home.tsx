import "../style/home.css";
import Feature from "./Feature";
import Recommended from "./Recommended";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";
// import Product from "../assets/modern.jpg"

function Header() {
  return (
   <>
      <HomeHeader/>
      <Feature featureContainer="featured-container" 
      h1="Featured Product" 
      p="Discover our most popular gadgets that customers love. Each product comes with <br/> our quality guarantee and fast shipping"                 
      featuredItem="featured-item" 
      featuredList="featured-list" 
      featuredImageContainer="featured-image-container" 
      featuredImage="featured-image" 
      featuredDisc="featued-dis" 
      featuredBtn="featured-btn" 
      featuredView="featured-view"/>  
      <Recommended/>
      <Footer/>
    </>
  );
}

export default Header;