import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import "../style/feature.css"; 
import StarRating from "./StarRating";

function Feature() {
interface Product {
  id: number;
  title: string;
  prodImg: string;
  rate: number;
  price: number;
}

const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() =>{
    const fetchProduct = async() =>{
      try{
        setLoading(true);
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

const data: Product[] = await response.json();
        setProducts(data);
        console.log(data);
      }
      catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally{
      setLoading(false);
    }
    } 
    fetchProduct();
  }, [])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="featured-container">
      <h1>Featured Product</h1>
      <p>Discover our most popular gadgets that customers love. Each product comes with <br/> our quality guarantee and fast shipping.</p>
      <div className="featured-list">
      {products.map((product) => (
        <div key={product.id} className="featured-item">
          <div className="featured-image-container">
          <img src={product.prodImg} alt={product.title} className="featured-image" />
          </div>

          <div className="featued-disc">
            <h3>
              {product.title}
            </h3>
            {product.rate}
            <p>Price: {product.price}</p>
          </div>
          <StarRating size={20} color="blue"/>
          <button className="featured-btn">
            <ShoppingCart />
            Add to Cart
          </button>
          </div>
      ))}
          
      </div>
      <button className="featured-view">
        View All Products
      </button>
    </div>
  );
}

export default Feature;