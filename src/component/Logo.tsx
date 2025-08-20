import "../style/header.css"

interface LogoProp{
    conName:string |"";
    spanName:string;
    logo:string | ""
  }
function Logo ({conName="logo-container", spanName="title",logo="logo"}:LogoProp){
  
  return(
    <div className={conName}>
      <div className={logo}>
        G
      </div>

      <span className={spanName}>
        GadgetHub
      </span>
      </div>
  )
}

export default Logo;