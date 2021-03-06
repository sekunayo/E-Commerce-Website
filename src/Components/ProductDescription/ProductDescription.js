import React from "react";
import ProductDescriptionText from "./ProductDescriptionText/ProductDescriptionText";
// import product from "../../images/img02.jpg";
import "../ProductDescription/productDescription.css";
function ProductDescription(props) {
  return (
    <div className="productDescription">
      <div className="productDescription__inner__container">
        <div className="productDescription__image">
          <img src={props.image} alt={"product__description"}></img>
        </div>
        <ProductDescriptionText price={props.price} />
      </div>
    </div>
  );
}

export default ProductDescription;
