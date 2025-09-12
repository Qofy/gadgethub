import { Truck, Shield, Star } from "lucide-react";

interface FeatureItemsProps {
  cnName?: string;
  p?: string;
  h1?: string;
  Sp?:string;
  Sh1?:string;
  Tp?:string;
  Th1?:string;
}

function FeatureItems({
  cnName="feature-item", 
  p="4.8/5 Customer Rating", 
  h1="", 
  Sp="Years Warranty",
  Sh1="",
  Tp="Free Shipping",
  Th1="",
}: FeatureItemsProps) {
  return (
    <>
    <div className={cnName}>
          <Star/>
          <h1>{h1}</h1>
          <p>{p}</p>
        </div>
        <div className={cnName}>
          <Shield />
          <h1>{Sh1}</h1>
          <p>{Sp}</p>
        </div>
        <div className={cnName}>
          <Truck/>
          <h1>{Th1}</h1>
          <p>{Tp}</p>
        </div>
        </>
  );
}

export default FeatureItems;