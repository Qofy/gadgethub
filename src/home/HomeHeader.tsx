import ReusableSection from "../component/Reusable";
import FeatureItems from "../home/FeatureItems";
import type { JSX } from "react/jsx-runtime";

// Refactored HomeHeader
function HomeHeader(): JSX.Element {
  const buttons = [
    {
      type: 'scroll' as const,
      to: "featured-container",
      className: "main-btn1 btns",
      text: "Shop Now →"
    },
    {
      type: 'navlink' as const,
      to: "/categories",
      className: "main-btn btns",
      text: "View Catalog"
    }
  ];

  return (
    <ReusableSection
      className="main-section"
      title="Smart Gadgets for"
      titleSpan="Modern Homes"
      description="Discover cutting-edge home gadgets that make your life easier, smarter, and more connected. From smart speakers to wireless chargers, we have everything you need."
      buttons={buttons}
      imageClassName="product-image"
      contentClassName="main-content"
      imageContent
    >
        <FeatureItems />
    </ReusableSection>
  );
}
export default HomeHeader;