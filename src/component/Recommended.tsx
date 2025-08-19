import "../style/recommended.css"
import { RotateCcw, Shield, Truck, Headphones } from "lucide-react"
import AboutInfo from "../sub-component/AboutInfo"

function Recommended(){
  return(
  <div className="about">
    <h1>
      Why Choose GadgetHub?
    </h1>
    <p>We're committed to providing the best shopping experience with premium products <br/> and exceptional service.
</p>
<div className="info">
<AboutInfo icon={<Shield color="rgb(23, 229, 229)"/>} header="Secure Shopping" paragraph="Your data is protected with bank-level encryption and secure payment processing."/>
<AboutInfo icon={<Truck color="rgb(23, 229, 229)"/>} header="Fast Shipping" paragraph="Free shipping on orders over $50. Express delivery available in major cities."/>
<AboutInfo icon={<RotateCcw color="rgb(23, 229, 229)"/>} header="Easy Returns" paragraph="30-day hassle-free returns on all products. No questions asked policy."/>
<AboutInfo icon={<Headphones color="rgb(23, 229, 229)"/>} header="24/7 Support" paragraph="Our expert support team is available around the clock to help you."/>
</div>
  </div>
  )
}

export default Recommended

/** 
 featureContainer,
  h1,
  p,
  featuredList,
  featuredItem,
  featuredImageContainer,
  featuredImage,
  featuredDisc,
  featuredBtn,
  featuredView
**/