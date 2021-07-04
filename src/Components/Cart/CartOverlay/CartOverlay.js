import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext";

function CartOverlay() {
  const { cart } = useContext(ProductContext);
  return (
    <div className="cart-overlay">
      <div className="cart-overlay-product-container">
        {cart.map((element) => {
          return (
            <div className="cart-overlay-product">
              <div className="cart-overlay-image">
                <img src={element.image} alt="cart__overlay"></img>
              </div>
              <div className="cart-overlay-text">
                <Link
                  to={`/product/${element.type}/${element.id}`}
                  className="nav__link"
                >
                  <p className="cart-overlay-text-name ">{element.name}</p>
                </Link>
                <p className="cart-overlay-text-price">${element.price}</p>
              </div>
              <div className="cart-overlay-icon">
                <i className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-overlay-buttons">
        <div className="cart-overlay-button ">
          <Link to="/checkout" className="nav__link">
            <button className="cart-overlay-checkout">Checkout</button>
          </Link>
        </div>
        <div className="cart-overlay-button">
          <Link to="/cart" className="nav__link">
            <button className="cart-overlay-cart">View Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartOverlay;
