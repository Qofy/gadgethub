import { useState, useEffect } from "react";
import "../style/feature.css"; 
import { NavLink } from "react-router-dom";
import Product from "./Product";

interface Product {
  id: number;
  title: string;
  prodImg: string;
  rate: number;
  price: number | "";
}

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
  featuredList,
  featuredItem,
  featuredImageContainer,
  featuredImage,
  featuredDisc,
  featuredBtn,
  featuredView,
  setCartCount 
}: FeatureProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:300/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Product[] = await response.json();
        setProducts(data);
        console.log(data);
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
    fetchProduct();
  }, []);

  const handleAddToCart = () => {
    setCartCount((prev: number) => prev + 1);
    console.log(setCartCount)
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={featureContainer}>
      <h1 className={h1}>Featured Product</h1>
      <p className={p}>
        Discover our most popular gadgets that customers love. Each product comes with <br /> 
        our quality guarantee and fast shipping.
      </p>
      <div className={featuredList}>
        {products.map((product) => (
         <Product 
         key={product.id}
            product={product} 
            handleAddToCart={handleAddToCart}
            featuredItem={featuredItem}
            featuredImageContainer={featuredImageContainer}
            featuredImage={featuredImage}
            featuredDisc={featuredDisc}
            featuredBtn={featuredBtn}
         />
        ))}
      </div>
      <NavLink to="view-product" className={featuredView}>
        View All Products
      </NavLink>
    </div>
  );
}

export default Feature;