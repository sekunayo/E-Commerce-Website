import React from "react";

function ProductOverlay() {
  return (
    <div class="product-overlay-container">
      <div class="product-overlay-buttons">
        <div class="overlay-button">
          <p>
            <i class="fas fa-search-plus"></i>
          </p>
        </div>
        <div class="overlay-button">
          <p>
            <i class="far fa-heart"></i>
          </p>
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
