// ViewProductCategories.jsx
import { useParams } from "react-router-dom";
import CatProduct from "../data/categoriesProduct-data";
import "../style/viewcatproduct.css"

function ViewProductCategories() {
  const { category } = useParams();
  
  const getProductsByCategory = () => {
    if (!category || category === 'all') {
      return Object.values(CatProduct).flat();
    }
    
    const categoryMap:Record<string, keyof typeof CatProduct>
    = {
      'smartphones': 'Smartphones',
      'smart-speakers': 'SmartSpeakers',
      'wireless-chargers': 'WirelessChargers',
      'gaming-accessories': 'GamingAccessories',
      'smart-watches': 'SmartWatches',
      'bluetooth-earbuds': 'BluetoothEarbuds',
    };
    
    const categoryKey = categoryMap[category];
    return categoryKey ? CatProduct[categoryKey] || [] : [];
  };

  const products = getProductsByCategory();
  
  // Function to determine stock status
  const getStockClass = (stock:number) => {
    return stock < 20 ? 'cat-product-stock low-stock' : 'cat-product-stock';
  };
  
  return (
    <div className="view-product-cat">
      <h2>
        {category && category !== 'all' 
          ? `${category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Products`
          : 'All Products'
        }
      </h2>
      
      <div className="products-grid">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="cat-product-item" key={item.id}>
              <div className="cat-product-image-container">
              <img 
                src={item.imageUrl} 
                alt={item.name} 
                className="cat-product-image"
               onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200?text=No+Image';
                }}
              />
              </div>
              <h3 className="cat-product-name">{item.name}</h3>
              <p className="cat-product-description">{item.description}</p>
              <p className="cat-product-price">${item.price}</p>
              <p className="cat-product-rating">Rating: {item.rating}/5</p>
              <p className={getStockClass(item.stock)}>
                {item.stock < 20 ? `Only ${item.stock} left!` : `${item.stock} in stock`}
              </p>
              
              {/* Optional: Add to cart button */}
              <button className="add-to-cart-btn">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default ViewProductCategories;