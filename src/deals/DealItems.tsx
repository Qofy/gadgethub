// deals/DealItems.tsx
import React from 'react';
import type { DealItemsProps } from '../data/deals-data';

import "../style/deals.css";

const DealItems: React.FC<DealItemsProps> = ({ products }) => {
  const calculateDiscount = (price: number, discountPrice: number): number => {
    return Math.round(((price - discountPrice) / price) * 100);
  };

const renderStars = (rating: number): React.ReactNode[] => {
    const stars: React.ReactNode[] = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }

    return stars;
  };

  const handleAddToCart = (productId: number): void => {
    // Add your cart logic here
    console.log(`Adding product ${productId} to cart`);
  };

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
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealItems;