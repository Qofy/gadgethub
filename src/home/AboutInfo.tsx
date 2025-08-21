import "../style/aboutInfo.css"
import type { ReactNode } from "react";

interface InfoProp{
header: string;
paragraph: string;
icon:ReactNode 
}

function AboutInfo({header, paragraph, icon} : InfoProp){
  return(
    <div className="info-content">
  <div className="info-symbol">
    {icon}
  </div>
    
    <h3>
      {header}
    </h3>
    <p>
      {paragraph}
    </p>
</div>
  )
}

export default AboutInfo;