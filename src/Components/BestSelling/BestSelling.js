import React, { useEffect, useState, useContext } from "react";
import Product from "../Product/Product.js";
import "../BestSelling/bestSelling.css";
import { ProductContext } from "../../context/ProductContext.js";
function BestSelling(props) {
  const [bestProduct, setBestProduct] = useState([]);
  const { productList, addToWishList } = useContext(ProductContext);
  useEffect(() => {
    const bestSellingProduct = productList.filter(
      (element) => element.category === "bestSelling"
    );
    setBestProduct(bestSellingProduct);
  }, [productList]);
  return (
    <div className="best-selling-container">
      <div className="inner-best-selling-container">
        <h3 className="best__selling__header">best selling products</h3>
        <div className="best-selling-products-container">
          <div className="best__selling__left__arrow best__selling__arrow">
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="best__selling__right__arrow best__selling__arrow">
            <i className="fas fa-chevron-right"></i>
          </div>
          {bestProduct.map((element) => (
            <Product
              key={element.id}
              image={element.image}
              price={element.price}
              id={element.id}
              type={element.type}
              eventHandler={addToWishList(element.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestSelling;
