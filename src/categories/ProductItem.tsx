import { NavLink } from "react-router";

interface ProductItemProp{
  productName: string;
  desc:string;
  numProduct:number;
  imgSrc:string
}

function ProductItem({productName, desc,numProduct, imgSrc}: ProductItemProp){
  return(
    <div className="item-container">
      <img src={imgSrc} alt={productName} />
      <h3>
        {productName}
      </h3>
      <p>
        {desc}
      </p>
      <div className="item-num">
      <p>
        {numProduct} products
      </p>
      <NavLink className="product-link" to="">
        View All 	&rarr;
      </NavLink>
      </div>
    </div>
  )
}

export default ProductItem