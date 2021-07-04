import React from "react";
import { Link } from "react-router-dom";

function ProductOverlay(props) {
  return (
    <div className="product-overlay-container">
      <div className="product-overlay-buttons">
        <div className="overlay-button">
          <p>
            <i className ="fas fa-search-plus"></i>
          </p>
        </div>
        <div className="overlay-button">
          <Link to="/wishlist" className="overlay__links">
            <p onClick={props.eventHandler}>
              <i className="far fa-heart"></i>
            </p>
          </Link>
        </div>
        <div className="overlay-button">
          <p>
            <i className="fas fa-random"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductOverlay;
