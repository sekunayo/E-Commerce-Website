import React from "react";
import OrderTable from "./OrderTable/OrderTable.js";
import { products } from "../../data.js";

function Order() {
  const orderProducts = products.slice(0, 4);

  return (
    <div className="checkout__inner__container__form__container">
      <h3 className="checkout__inner__container__form__container__header">
        6. Order Review
      </h3>
      <OrderTable products={orderProducts} />
      <div className="checkout__button__box order__footer__button">
        <button className="checkout__button__box__button">Place Order</button>
      </div>
    </div>
  );
}

export default Order;
