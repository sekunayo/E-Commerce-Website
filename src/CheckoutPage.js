import React from "react";
import Billing from "./Components/Billing/Billing";
import Checkout from "./Components/Checkout/Checkout";
import Order from "./Components/Order/Order";
import Payment from "./Components/Payment/Payment";
import Shipping from "./Components/Shipping/Shipping";

function CheckoutPage() {
  return (
    <div className="checkout">
      <div className="checkout__inner__container">
        <h1 className="checkout__inner__container__header">Checkout</h1>
        <Checkout />
        <Billing type="2. Billing Informations" />
        <Billing type="3. Shipping Informations" />
        <Shipping />
        <Payment />
        <Order />
      </div>
    </div>
  );
}

export default CheckoutPage;
