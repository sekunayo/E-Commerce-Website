import React from "react";
import Product from "../Product/Product.js";
import "../ProductGrid/productGrid.css";
function ProductGrid(props) {
  return (
    <div className="product__grid">
      <div className="product__grid__inner__container">
        <h3>{props.children}</h3>
        <div className="product__grid__inner__container__box">
          {props.productData.map((element) => (
            <Product
              key={element.id}
              image={element.image}
              price={element.price}
              class={"product__grid__box"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
