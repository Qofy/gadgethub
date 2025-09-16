import { type ComponentType } from "react";
import { Truck, Shield, Star, type LucideProps } from "lucide-react";

interface IconConfig {
  color?: string;
  size?: number | string;
  strokeWidth?: number;
  className?: string;
}
interface FeatureItemsProps {
  containerName?: string,
  cnName?: string;
  // First feature (Star by default)
  StarIcon?: ComponentType<LucideProps>;
  p?: string;
  h1?: string;
  // Second feature (Shield by default)
  ShieldIcon?: ComponentType<LucideProps>;
  Sp?: string;
  Sh1?: string;
  // Third feature (Truck by default)
  TruckIcon?: ComponentType<LucideProps>;
  Tp?: string;
  Th1?: string;
  iconProps?: Partial<IconConfig>
}

function FeatureItems({
  containerName = 'features',
  cnName = "feature-item",
  StarIcon = Star,
  p = "4.8/5 Customer Rating",
  h1 = "",
  ShieldIcon = Shield,
  Sp = "Years Warranty",
  Sh1 = "",
  TruckIcon = Truck,
  Tp = "Free Shipping",
  Th1 = "",
  iconProps = {}
}: FeatureItemsProps) {
  return (
    <div className={containerName}>
      <div className={cnName}>
        <StarIcon {...iconProps}/>
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
      <div className={cnName}>
        <ShieldIcon {...iconProps}/>
        <h1>{Sh1}</h1>
        <p>{Sp}</p>
      </div>
      <div className={cnName}>
        <TruckIcon {...iconProps}/>
        <h1>{Th1}</h1>
        <p>{Tp}</p>
      </div>
    </div>
  );
}

export default FeatureItems;