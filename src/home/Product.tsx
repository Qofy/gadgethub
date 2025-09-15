import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import StarRating from "./StarRating";
import "../style/product.css";

interface Product {
  id: number;
  title: string;
  prodImg: string;
  rate: number;
  price: number | "";
}

interface ProductGridProps {
  title?: string;
  description?: string;
  limit?: number; // Limit number of products to show
  showPagination?: boolean;
  gridClassName?: string;
  cardClassName?: string;
  setCartCount?: (callback: (prev: number) => number) => void;
}

function ProductGrid({ 
  title = "Products",
  description = "",
  limit,
  showPagination = false,
  gridClassName = "products-grid",
  cardClassName = "product-card",
  setCartCount
}: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(limit || 12);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3001/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // Debug log to see actual structure
        
        // Handle different possible response structures
        let productsArray: Product[] = [];
        if (data && Array.isArray(data.products)) {
          productsArray = data.products;
        } else if (Array.isArray(data)) {
          productsArray = data;
        } else {
          console.warn("Unexpected API response structure:", data);
          throw new Error("Invalid data format received from API");
        }
        
        setProducts(productsArray);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = () => {
    if (setCartCount) {
      setCartCount((prev: number) => prev + 1);
    }
  };

  // Handle product display based on limit and pagination
  // Add safety checks to ensure products is always an array
  const safeProducts = Array.isArray(products) ? products : [];
  let displayProducts = safeProducts;
  let totalPages = 1;

  if (showPagination) {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    displayProducts = safeProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    totalPages = Math.ceil(safeProducts.length / productsPerPage);
  } else if (limit) {
    displayProducts = safeProducts.slice(0, limit);
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (safeProducts.length === 0) return <div className="no-products">No products found.</div>;

  return (
    <div className="product-grid-container">
      {(title || description) && (
        <div className="product-grid-header">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </div>
      )}

      <div className={gridClassName}>
        {displayProducts.map((product) => (
          <div key={product.id} className={cardClassName}>
            <div className="product-image-container">
              <img src={product.prodImg} alt={product.title} className="product-image" />
            </div>

            <div className="product-info">
              <h3>{product.title}</h3>
              <StarRating maxRating={5} size={18} color="#ffa500" />
              <p className="product-price">{product.price}</p>
            </div>
            
            {setCartCount && (
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                <ShoppingCart size={16} />
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      {showPagination && totalPages > 1 && (
        <div className="pagination">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            Previous
          </button>
          
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;