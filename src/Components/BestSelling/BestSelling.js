import React from "react";
import Product from "../Product/Product.js";
import "../BestSelling/bestSelling.css";
import { BestSellingProducts } from "../../data.js";
import specialProduct from "../../images/special-product-bg.jpg";

function BestSelling() {
  return (
    <div className="best-selling-container">
      <div className="inner-best-selling-container">
        <div className="best-selling-image-container">
          <img src={specialProduct} alt="" srcSet=""></img>
          <div className="best-selling-text-container">
            <h3>Best Selling</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum.
            </p>
            <div className="best-selling-button-container">
              <button>More products</button>
            </div>
            <div className="time-container">
              <p className="day">
                a<br />
                <span>Day</span>
              </p>
              <p className="month">
                a<br />
                <span>Month</span>
              </p>
              <p className="year">
                a<br />
                <span>Year</span>
              </p>
              <p className="time">
                a<br />
                <span>Time</span>
              </p>
            </div>
          </div>
        </div>
        <div className="best-selling-products-container">
          {BestSellingProducts.map((element) => (
            <Product
              key={element.id}
              image={element.image}
              price={element.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSelling;
