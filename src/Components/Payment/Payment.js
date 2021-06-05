import React from "react";

function Payment() {
  return (
    <div className="checkout__inner__container__form__container">
      <h3 className="checkout__inner__container__form__container__header">
        5. Payment Information
      </h3>
      <div className="payment__form__container">
        <form>
          <div className="checkout--input--group">
            <input name="Payment" type="radio"></input>
            <label> Check / Money order</label>
          </div>
          <div className="checkout--input--group">
            <input name="Payment" type="radio"></input>
            <label> Credit card (saved)</label>
          </div>
        </form>
        <div className="checkout__button__box">
          <button className="checkout__button__box__button">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
