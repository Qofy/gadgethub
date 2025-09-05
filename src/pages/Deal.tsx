import Header from "./Header";
import "../style/deals.css"
import DealHeader from "../categories/CategoriesHeader"
import Buttons from "../deals/Buttons";
import DealItems from "../deals/DealItems";
import type { DealCategory } from "../data/deals-data";
import dealProducts from "../data/deals-data";
import { useState } from "react";
import News from "../deals/News";


function Deal() {
  const [activeCategory, setActiveCategory] = useState<DealCategory>('AllDeals');

  const handleCategoryChange = (category: DealCategory): void => {
    setActiveCategory(category);
  };
  return (
    <div className="Deal-container">
      <Header/>
      <DealHeader hearderclassName="deal-header" 
      h1="Amazing Deals & Offers" 
      p="Don't miss out on our incredible deals! Limited time offers on the best smart home gadgets. Save big on top-rated products with fast shipping and quality guarantee."/>
      <Buttons activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      <DealItems products={dealProducts[activeCategory] || []}/>
      <News/>
    </div>
  );
}

export default Deal;