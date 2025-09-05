import React, { useCallback } from 'react';
import type { DealItemsProps } from '../data/deals-data';
import { ShoppingCart, Star, StarHalf } from 'lucide-react';
import "../style/deals.css";

interface DealItemsExtendedProps extends DealItemsProps {
  onAddToCart?: (productId: number) => void;
}

const DealItems: React.FC<DealItemsExtendedProps> = ({ products, onAddToCart }) => {
  const calculateDiscount = useCallback((price: number, discountPrice: number): number => {
    return Math.round(((price - discountPrice) / price) * 100);
  }, []);

  const renderStars = useCallback((rating: number): React.ReactNode[] => {
    const stars: React.ReactNode[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="star filled" size={16} fill="currentColor" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" className="star half" size={16} fill="currentColor" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="star empty" size={16} />
      );
    }

    return stars;
  }, []);

  const handleAddToCart = useCallback((productId: number): void => {
    if (onAddToCart) {
      onAddToCart(productId);
    } else {
      // Fallback or default behavior
      console.log(`Adding product ${productId} to cart`);
    }
  }, [onAddToCart]);

  return (
    <div className="deal-items">
      {products.map((product) => (
        <div key={product.id} className="deal-card">
          <div className="discount-badge">
            -{calculateDiscount(product.price, product.discountPrice)}%
          </div>
          <div className='image-container'>
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          </div>
          
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-description">{product.description}</p>
            
            <div className="rating">
              <div className="stars">
                {renderStars(product.rating)}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            <div className="price-section">
              <span className="original-price">${product.price}</span>
              <span className="discount-price">${product.discountPrice}</span>
            </div>
            
            <button 
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product.id)}
            >
              <ShoppingCart size={16} />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealItems;