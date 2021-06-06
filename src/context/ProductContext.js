import React, { createContext, useState, useEffect } from "react";
import { products } from "../data";
import { useHistory } from "react-router-dom";

export const ProductContext = createContext();

function ProductContextProvider(props) {
  const [product, setProduct] = useState(products);
  const [wishlist, setWishlist] = useState([]);
  const history = useHistory();
  useEffect(() => {
    let data = localStorage.getItem("wishlist");
    if (data) {
      data = JSON.parse(localStorage.getItem("wishlist"));
      setWishlist(data);
    }
  }, []);
  const addToWishList = (id) => (e) => {
    e.preventDefault();
    const newElement = product.find((element) => id === element.id);
    const booleanValue = wishlist.some(
      (element) => element.id === newElement.id
    );
    if (!booleanValue) {
      let newList = [...wishlist, newElement];
      localStorage.setItem("wishlist", JSON.stringify(newList));
      setWishlist(newList);
      history.push("/wishlist");
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productList: product,
        wishlist,
        addToWishList,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
