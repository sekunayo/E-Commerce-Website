import React from "react";
import { Link } from "react-router-dom";

function ProductOverlay(props) {
  return (
    <div class="product-overlay-container">
      <div class="product-overlay-buttons">
        <div class="overlay-button">
          <p>
            <i class="fas fa-search-plus"></i>
          </p>
        </div>
        <div class="overlay-button">
          <Link to="/wishlist" className="overlay__links">
            <p>
              <i class="far fa-heart"></i>
            </p>
          </Link>
        </div>
        <div class="overlay-button">
          <p>
            <i class="fas fa-random"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductOverlay;
