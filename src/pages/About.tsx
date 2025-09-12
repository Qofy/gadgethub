import Header from "../pages/Header";
import AboutHeader from "../categories/CategoriesHeader"
import AboutFeatures from "../about/AboutFeatures";
import OurStory from "../about/OurStory";

function About() {
  return (
    <div>
      <Header/>
      <AboutHeader hearderclassName="about-header" p="We're passionate about bringing you the latest and greatest in smart home technology. Our mission is to make modern living more convenient, efficient, and enjoyable through innovative gadgets and exceptional service." 
      h1="About GadgetHub"/>
     <AboutFeatures/>
      <OurStory/>
      
    </div>
  );
}

export default About;