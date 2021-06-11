import React, { createContext, useState, useEffect } from "react";
import { products } from "../data";
import { useHistory } from "react-router-dom";

export const ProductContext = createContext();

function ProductContextProvider(props) {
  const [product] = useState(products);
  const [wishlist, setWishlist] = useState([]);
  const [cart,setCart] = useState([]);
  const history = useHistory();
  useEffect(() => {
    let data = localStorage.getItem("wishlist");
    let cartData = localStorage.getItem("cart");
    if (data) {
      data = JSON.parse(localStorage.getItem("wishlist"));
      setWishlist(data);
    }
    if (cartData) {
      cartData = JSON.parse(localStorage.getItem("cart"));
      setCart(cartData);
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
  const addToCart = (id) => (e) => {
    e.preventDefault();
    const newElement = product.find((element) => id === element.id);
    const booleanValue = cart.some(
      (element) => element.id === newElement.id
    );
    if (!booleanValue) {
      let newList = [...cart, newElement];
      localStorage.setItem("cart", JSON.stringify(newList));
      setCart(newList);
      history.push("/cart");
    }
  };

  return (
    <ProductContext.Provider
      value={{
        productList: product,
        wishlist,
        cart,
        addToWishList,
        addToCart
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
