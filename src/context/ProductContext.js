import React, { createContext, useState } from "react";
import { products } from "../data";

export const ProductContext = createContext();

function ProductContextProvider(props) {
  const [product, setProduct] = useState(products);
 const checkIndex = (index) => {
          const newElement = products.find(index === product.id);
        },
  return (
    <ProductContext.Provider
      value={{
        productList: products,
        productFunction = checkIndex()
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
