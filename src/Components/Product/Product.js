import React, { useState } from "react";
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
    <div className={`product-box ${props.className}`}>
      <div
        className="product-image-box"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <img src={props.image} alt=""></img>
        {overlay && <ProductOverlay eventHandler={props.eventHandler} />}
      </div>
      <div className="product-text-box">
        <Link to={`/product/${props.type}/${props.id}`} className="nav__link">
          <p className="product-title">Product Title Here</p>
        </Link>
        <p className="product-rating">
          <span>
            <i className="far fa-star"></i>
          </span>
          <span>
            <i className="far fa-star"></i>
          </span>
          <span>
            <i className="far fa-star"></i>
          </span>
          <span>
            <i className="far fa-star"></i>
          </span>
          <span>
            <i className="far fa-star"></i>
          </span>
        </p>
        <p className="product-price">{props.price}</p>
        <div className="product-button-container">
          <Link to="/cart">
            <button className="product-button">Add to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
