import React from "react";
import { useParams } from "react-router-dom";
import ProductDescription from "./Components/ProductDescription/ProductDescription.js";
import Tabs from "../src/Components/Tabs/Tabs.js";
import { products } from "../src/data.js";
import Product from "../src/Components/Product/Product.js";
import "../src/Components/Product/product.css";
function ProductPage() {
  const { type, id } = useParams();
  const typeProduct = products.filter((element) => element.type === type);
  const relatedProducts = typeProduct.slice(0, 4);

  return (
    <>
      <div className="pagination">
        <p>Home / Fruits / Bucket Bag / Lorem ipsum dolor sit amet</p>
      </div>
      {products
        .filter((element) => element.id === id)
        .map((element) => (
          <ProductDescription price={element.price} image={element.image} />
        ))}
      <Tabs />
      <div className="product__grid">
        <div className="product__grid__inner__container">
          <h3>related Products</h3>
          <div className="product__grid__inner__container__box">
            {relatedProducts.map((element) => {
              return (
                <Product
                  key={element.id}
                  image={element.image}
                  price={element.price}
                  class={"product__grid__box"}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="product__grid">
        <div className="product__grid__inner__container">
          <h3>Upsell Products</h3>
          <div className="product__grid__inner__container__box">
            {relatedProducts.map((element) => {
              return (
                <Product
                  key={element.id}
                  image={element.image}
                  price={element.price}
                  class={"product__grid__box"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
