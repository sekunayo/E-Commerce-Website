import React, { useEffect, useState, useContext } from "react";
import Product from "../Product/Product.js";
import "../BestSelling/bestSelling.css";
import specialProduct from "../../images/special-product-bg.jpg";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext.js";
function BestSelling(props) {
  const [bestProduct, setBestProduct] = useState([]);
  const productValue = useContext(ProductContext);
  const { a, b } = productValue;
  console.log(a, b);
  // useEffect(() => {
  //   const bestSellingProduct = value1.filter(
  //     (element) => element.category === "bestSelling"
  //   );
  //   setBestProduct(bestSellingProduct);
  // }, [value1]);
  return (
    <p></p>
    // <div className="best-selling-container">
    //   <div className="inner-best-selling-container">
    //     <h3 className="best__selling__header">best selling products</h3>
    //     <div className="best-selling-products-container">
    //       <div className="best__selling__left__arrow best__selling__arrow">
    //         <i class="fas fa-chevron-left"></i>
    //       </div>
    //       <div className="best__selling__right__arrow best__selling__arrow">
    //         <i class="fas fa-chevron-right"></i>
    //       </div>
    //       {bestProduct.map((element) => (
    //         <Link
    //           to={`/product/${element.type}/${element.id}`}
    //           className="nav__link"
    //         >
    //           <Product
    //             key={element.id}
    //             image={element.image}
    //             price={element.price}
    //           />
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}

export default BestSelling;
