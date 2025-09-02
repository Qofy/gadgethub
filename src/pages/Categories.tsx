import CategoriesHeader from "../categories/CategoriesHeader";
import "../style/category.css"
import Footer from "./Footer";
import Header from "./Header";
import CategoriesItems from "../categories/CategoriesItems";

function Categories() {
  return (
    <div className="Categories-container">
      <Header/>
      <CategoriesHeader/>
      <CategoriesItems/>
      <Footer/>
    </div>
  );
}

export default Categories;