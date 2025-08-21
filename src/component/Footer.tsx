import Logo from "../home/Logo";
import "../style/footer.css"
import { Facebook, Twitter, Instagram,Youtube, Phone, Mail, MapPin,  } from "lucide-react";
import { Link } from "react-router-dom";

function Footer(){
  return(
    <div className="footer-container">
      <div className="footer-header">
        <div className="footer-header_item">
          <Logo spanName="footer-title" logo="footer-logo"  conName="footer-logo-con"/>
          <p>
            Your trusted destination for cutting-edge home gadgets and electronics. Making technology accessible for everyone.
          </p>
          <div className="header-media">
            <Facebook width={20}/>
            <Twitter width={20}/>
            <Instagram width={20}/>
            <Youtube/>
          </div>
        </div>
        <div className="footer-header_item">
          <h2>
            Quick Links
          </h2>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Deals</li>
            <li>About</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer-header_item">
          <h2>
            Customer Service
          </h2>
          <ul>
            <li>Help</li>
            <li>Shipping info</li>
            <li>Returns</li>
            <li>Warranty</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div className="footer-header_item">
          <h2>
            Get in Touch
          </h2>
          <ul>
            <li> <Phone color="#007bff"/> +1 (555) 123-4567</li>
            <li>
          <Mail color="#007bff"/>
          support@gadgethub.com
            </li>
            <li> 
          <MapPin color="#007bff"/>
          123 Tech Street, Silicon Valley, CA
            </li>
          </ul>         
        </div>
      </div>
      <div className="footer-legals">
          <p>
          &copy; 2024 GadgetHub. All rights reserved.
          </p>
          <div className="footer-ptc">
            <Link className="link" to="">
            Privacy Policy
            </Link>
            <Link className="link" to="">
            Terms of Service
            </Link>
            <Link className="link" to="">
           Cookie Policy
            </Link>
          </div>
      </div>
    </div>
  )
}
export default Footer;