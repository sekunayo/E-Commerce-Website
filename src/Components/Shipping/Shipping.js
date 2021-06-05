import React from "react";

function Shipping() {
  return (
    <div className="checkout__inner__container__form__container">
      <h3 className="checkout__inner__container__form__container__header">
        4. Shipping Method
      </h3>
      <div className="shipping__form__container">
        <form>
          <p>Free Shipping</p>
          <div className="checkout--input--group">
            <input name="Shipping" type="radio"></input>
            <label>Free $0</label>
          </div>
          <p>Free Shipping</p>
          <div className="checkout--input--group">
            <input name="Shipping" type="radio"></input>
            <label>Standard Shipping $5.00</label>
          </div>
        </form>
        <div className="checkout__button__box">
          <button className="checkout__button__box__button">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
