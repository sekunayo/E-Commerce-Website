import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
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
        {overlay && <ProductOverlay eventHandler={props.eventHandler} />}
      </div>
      <div class="product-text-box">
        <Link to={`/product/${props.type}/${props.id}`} className="nav__link">
          <p class="product-title">Product Title Here</p>
        </Link>
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
          <Link to="/cart">
            <button class="product-button">Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
