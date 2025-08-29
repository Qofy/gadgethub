import { useState, useEffect } from "react";
import Product from "../home/Product";
import Header from "../pages/Header";
import "../style/view-product.css"; 

interface ProductType {
  id: number;
  title: string;
  prodImg: string;
  rate: number;
  price: number | "";
}

function ViewAllProduct() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:300/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: ProductType[] = await response.json();
        setProducts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = () => {
    setCartCount((prev: number) => prev + 1);
    console.log("Item added to cart");
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="view-all-product">
      <Header />
      
      <div className="view-all-header">
        <h1>All Products</h1>
        <p>Browse our complete collection of amazing gadgets</p>
        <div className="cart-info">
          <span>Items in cart: {cartCount}</span>
        </div>
      </div>

      <div className="products-container">
        <div className="products-grid">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              featuredItem="product-card"
              featuredImageContainer="product-image-container"
              featuredImage="product-image"
              featuredDisc="product-details"
              featuredBtn="add-to-cart-btn"
            />
          ))}
        </div>
        
        {products.length === 0 && !loading && (
          <div className="no-products">
            <p>No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewAllProduct;