import Header from "../pages/Header";
import AboutHeader from "../categories/CategoriesHeader"
import AboutFeatures from "../about/AboutFeatures";
import OurStory from "../about/OurStory";
import Footer from "./Footer";
import FeatureItems from "../home/FeatureItems";
import { Heart } from "lucide-react";
import "../style/aboutInfo.css"

function About() {
  return (
    <div className="about-page">
      <Header/>
      <AboutHeader hearderclassName="about-header" p="We're passionate about bringing you the latest and greatest in smart home technology. Our mission is to make modern living more convenient, efficient, and enjoyable through innovative gadgets and exceptional service." 
      h1="About GadgetHub"/>
     <AboutFeatures/>
      <OurStory/>
      <AboutHeader 
      hearderclassName="our-values" 
      p="These core principles guide everything we do, from product selection to customer service."
      h1="Our Values"/>
      <FeatureItems 
      StarIcon={Heart} 
      h1="Customer First" 
      p="Your satisfaction is our priority. We're here to help you find the perfect gadgets for your needs."
      Sh1="Quality Assurance"
      Sp="Every product is tested and verified to meet our high standards before reaching your doorstep."
      Th1="Fast Delivery"
      Tp="Quick and reliable shipping with real-time tracking so you know exactly when your order arrives."
      />
      <AboutHeader 
      hearderclassName="teams" 
      p="The passionate people behind GadgetHub who work tirelessly to bring you the best products and service."
      h1="Meet Our Team"/>
      <Footer/>
    </div>
  );
}

export default About;