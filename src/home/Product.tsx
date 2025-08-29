import { ShoppingCart } from "lucide-react";
import StarRating from "./StarRating";

// Define the Product interface
interface ProductType {
  id: number;
  title: string;
  prodImg: string;
  rate: number;
  price: number | "";
}

// Define props interface
interface ProductProps {
  product: ProductType;
  handleAddToCart: () => void;
  featuredItem: string;
  featuredImageContainer: string | "";
  featuredImage: string;
  featuredDisc: string;
  featuredBtn: string;
}

function Product({ 
  product, 
  handleAddToCart,
  featuredItem,
  featuredImageContainer,
  featuredImage,
  featuredDisc,
  featuredBtn
}: ProductProps) {
  return (
    <div key={product.id} className={featuredItem}>
      <div className={featuredImageContainer}>
        <img src={product.prodImg} alt={product.title} className={featuredImage} />
      </div>

      <div className={featuredDisc}>
        <h3>{product.title}</h3>
        <StarRating maxRating={5} size={20} color="blue" />
        <p>Price: {product.price}</p>
      </div>
      
      <button className={featuredBtn} onClick={handleAddToCart}>
        <ShoppingCart />
        Add to Cart
      </button>
    </div>
  );
}

export default Product;