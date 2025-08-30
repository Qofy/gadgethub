import { useState } from "react";
import ProductGrid from "../home/Product";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import "../style/view-product.css"; 

function ViewAllProduct() {
  const [cartCount, setCartCount] = useState(0);

   const handleAddToCart = () => {
    if (setCartCount) {
      setCartCount((prev: number) => prev + 1);
    }
  };
  return (
    <div className="view-all-product">
      <Header cartCount={cartCount}/>
      
      <div className="view-all-header">
        <h1>All Products</h1>
        <p>Browse our complete collection of amazing gadgets</p>
      </div>
            <ProductGrid
             title="All Products"
              limit={22} 
              setCartCount={()=> handleAddToCart()}
              showPagination={true}
            />  
            <Footer/>
    </div>
  );
}

export default ViewAllProduct;