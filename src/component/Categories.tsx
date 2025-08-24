import { NavLink } from "react-router";
import CategoriesHeader from "../categories/CategoriesHeader";
import ProductItem from "../categories/ProductItem";
import "../style/category.css"

function Categories() {
  return (
    <div className="Categories-container">
      <CategoriesHeader/>
      <div className="product-ctg">
        <h2>
          Product Categories
        </h2>
        <div className="items">
          <NavLink to="" className="items-links">
          <ProductItem productName="Smart Speakers" desc="Voice-controlled speakers for smart homes" numProduct={24} imgSrc="https://www.cnet.com/a/img/resize/a55d40f49697cc72fa6ecf5c2463f2997297d90d/hub/2020/10/21/a532eddf-2122-4ca0-bc56-539295329d2b/amazon-echo-2020-2.jpg?auto=webp&height=500"/>
          </NavLink>
          <NavLink to="" className="items-links">
          <ProductItem productName="Wireless Chargers" desc="Fast wireless charging solutions" numProduct={18} imgSrc="https://www.ultraprolink.com/cdn/shop/articles/Vylis_Charging_Blog_Image_1200x1200.jpg?v=1675245455"/>
          </NavLink>
          <NavLink to="" className="items-links">
          <ProductItem productName="Gaming Accessories" desc="Enhance your gaming experience" numProduct={30} imgSrc="https://www.leetdesk.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fleetdesk%2Fc5527f47-def9-433c-9cce-23f286dbfea2_Front.jpg%3Fauto%3Dcompress%2Cformat%26rect%3D0%2C374%2C4000%2C2250%26w%3D1920%26h%3D1080&w=3840&q=75"/>
          </NavLink>
          <NavLink to="" className="items-links">
          <ProductItem productName="Smart Watches" desc="VFitness and productivity on your wrist" numProduct={27} imgSrc="https://istarmax.com/wp-content/uploads/2024/02/2024-FEB-PRODUCT-RANGE-1-1024x499.webp"/>
          </NavLink>
          <NavLink to="" className="items-links">
          <ProductItem productName="Bluetooth Earbuds" desc="Premium wireless audio experience" numProduct={50} imgSrc="https://www.soundguys.com/wp-content/uploads/2024/08/earbuds-cases-scaled.jpg"/>
          </NavLink>
          <NavLink to="" className="items-links">
          <ProductItem productName="Smart Phones" desc="All Smart-phones of your type are available" numProduct={24} imgSrc="https://cdn.mos.cms.futurecdn.net/M4nigVN3vvA5EEnNX9atxY.jpg"/>
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default Categories;