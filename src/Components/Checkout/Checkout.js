import React from "react";
import "../Checkout/checkout.css";

function Checkout() {
  return (
    <div className="checkout__inner__container__form__container">
      <h3 className="checkout__inner__container__form__container__header">
        1. Checkout Method
      </h3>
      <div className="checkout__inner__container__form__container__form__box">
        <div className="checkout__form__container__box__1">
          <h4>Checkout as a Guest or Register</h4>
          <div className="checkout__form__container__section__box__1">
            <p>Register with us for future convenience </p>
            <form className="checkout--form">
              <div className="checkout--input--group">
                <input
                  type="radio"
                  name="register"
                  value="Checkout as Guest"
                ></input>
                <label>Checkout as Guest</label>
              </div>
              <div className="checkout--input--group">
                <input type="radio" name="register" value="Register"></input>
                <label>Register</label>
              </div>
            </form>
            <div className="checkout__form__container__section__box__2">
              <h4>Register and save time!</h4>
              <p>Register with us for future convenience:</p>
              <ul className="checkout--list">
                <li>
                  <div className="checkout--list--button">
                    <i class="fas fa-check"></i>
                  </div>
                  Fast and easy check out
                </li>
                <li>
                  <div className="checkout--list--button">
                    <i class="fas fa-check"></i>
                  </div>
                  Easy access to your order history and status
                </li>
              </ul>
            </div>
            <div className="checkout__button__box">
              <button className="checkout__button__box__button">
                Continue
              </button>
            </div>
          </div>
        </div>
        <div className="checkout__form__container__box__2">
          <h4>Login</h4>
          <p>Already registered? Please log in below:</p>
          <form className="checkout--forms">
            <div className="checkout--input">
              <label>Email address</label>
              <input type="email"></input>
            </div>
            <div className="checkout--input">
              <label>Password</label>
              <input type="password"></input>
            </div>
            <a>Forgot your password?</a>
          </form>
          <div className="checkout__button__box">
            <button className="checkout__button__box__button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
