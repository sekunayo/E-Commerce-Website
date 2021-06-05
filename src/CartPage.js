import React from "react";
import Cart from "./Components/Cart/Cart";

function CartPage() {
  return (
    <div className="checkout">
      <div className="checkout__inner__container">
        <h1 className="checkout__inner__container__header">
          shopping cart summary
        </h1>
        <Cart />
      </div>
    </div>
  );
}

export default CartPage;
