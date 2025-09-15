import { Star, Truck, Badge, Users } from "lucide-react";

function AboutFeatures() {
  return (
     <div className="about-features">
        <div className="about-feature-item">
          <Users color="rgb(23, 229, 229)" size={50}/>
          <h1>50,000+</h1>
          <p>Happy Customers</p>
        </div>
        <div className="about-feature-item">
          <Badge size={50} color="rgb(23, 229, 229)"/>
          <h1>10+</h1>
          <p>Years in experince</p>
        </div>
        <div className="about-feature-item">
          <Star size={50} color="rgb(23, 229, 229)"/>
          <h1>4.8/5</h1>
          <p>Customer Rating</p>
        </div>
        <div className="about-feature-item">
          <Truck size={50} color="rgb(23, 229, 229)"/>
          <h1>100,000+</h1>
          <p>Orders Delivered</p>
        </div>
      </div>
  );
}

export default AboutFeatures;