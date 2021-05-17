import React, { useState } from "react";
import "../Product/product.css";
import ProductOverlay from "./ProductOverlay/ProductOverlay";

function Product(props) {
  const [overlay, setOverlay] = useState(false);
  const mouseEnter = () => {
    setOverlay(true);
  };
  const mouseLeave = () => {
    setOverlay(false);
  };
  return (
    <div class={`product-box ${props.class}`}>
      <div
        class="product-image-box"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <img src={props.image} alt="" srcset=""></img>
        {overlay && <ProductOverlay />}
      </div>
      <div class="product-text-box">
        <p class="product-title">Product Title Here</p>
        <p class="product-rating">
          <span>
            <i class="far fa-star"></i>
          </span>
          <span>
            <i class="far fa-star"></i>
          </span>
          <span>
            <i class="far fa-star"></i>
          </span>
          <span>
            <i class="far fa-star"></i>
          </span>
          <span>
            <i class="far fa-star"></i>
          </span>
        </p>
        <p class="product-price">{props.price}</p>
        <div class="product-button-container">
          <button class="product-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
