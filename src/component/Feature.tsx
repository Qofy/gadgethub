import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import "../style/feature.css"; 
import StarRating from "./StarRating";

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
  featuredList: string |"";
  featuredItem: string | "";
  featuredImageContainer: string;
  featuredImage: string |"";
  featuredDisc: string |"";
  featuredBtn: string| "";
  featuredView: string | "";
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
  featuredView
}: FeatureProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:30001/products");
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
          <div key={product.id} className={featuredItem}>
            <div className={featuredImageContainer}>
              <img src={product.prodImg} alt={product.title} className={featuredImage} />
            </div>

            <div className={featuredDisc}>
              <h3>{product.title}</h3>
              <StarRating  maxRating={5} size={20} color="blue" />
              <p>Price: ${product.price}</p>
            </div>
            
            <button className={featuredBtn}>
              <ShoppingCart />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button className={featuredView}>
        View All Products
      </button>
    </div>
  );
}

export default Feature;