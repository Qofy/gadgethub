import "../style/feature.css"; 
import { NavLink } from "react-router-dom";
import ProductGrid from "./Product";
interface FeatureProps {
  featureContainer: string;
  h1: string;
  p: string;
  featuredList: string | "";
  featuredItem: string | "";
  featuredImageContainer: string;
  featuredImage: string | "";
  featuredDisc: string | "";
  featuredBtn: string | "";
  featuredView: string | "";
  setCartCount: (callback: (prev: number) => number) => void; // Added to props interface
}

function Feature({
  featureContainer,
  h1,
  p,
  featuredView,
  setCartCount 
}: FeatureProps) {
 

  return (
    <div className={featureContainer}>
      <h1 className={h1}>Featured Product</h1>
      <p className={p}>
        Discover our most popular gadgets that customers love. Each product comes with <br /> 
        our quality guarantee and fast shipping.
      </p>
         <ProductGrid 
         title=""
         limit={4}
         setCartCount={setCartCount}
         />
      <NavLink to="view-product" className={featuredView}>
        View All Products
      </NavLink>
    </div>
  );
}

export default Feature;