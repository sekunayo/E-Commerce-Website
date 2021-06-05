import React from "react";
import CompareProduct from "./Components/CompareProduct/CompareProduct";
function Compare() {
  return (
    <div className="compare">
      <div className="compare__inner__container">
        <h1 className="compare__inner__container__header">Compare Products</h1>
        <CompareProduct />
      </div>
    </div>
  );
}

export default Compare;
