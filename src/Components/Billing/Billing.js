import React from "react";

function Billing(props) {
  return (
    <div className="checkout__inner__container__form__container">
      <h3 className="checkout__inner__container__form__container__header">
        {props.type}
      </h3>
      <div className="billing__form__container">
        <form>
          <div className="checkout--input">
            <label>First Name</label>
            <input type="text"></input>
          </div>
          <div className="checkout--input">
            <label>Last Name</label>
            <input type="text"></input>
          </div>
          <div className="checkout--input">
            <label>Company Name</label>
            <input type="text"></input>
          </div>
          <div className="checkout--input">
            <label>Email Address</label>
            <input type="email"></input>
          </div>
          <div className="checkout--input">
            <label>Address</label>
            <input type="text"></input>
          </div>
          <div className="checkout--input">
            <label>City</label>
            <input type="text"></input>
          </div>
          <div className="checkout--input">
            <label>State / Province</label>
            <input type="text"></input>
          </div>
          <div className="checkout--input">
            <label>Zip / Postal Code</label>
            <input type="text"></input>
          </div>
          <div className="checkout--input">
            <label>Country</label>
            <input type="text"></input>
          </div>
          <div className="checkout--input">
            <label>Telephone</label>
            <input type="tel"></input>
          </div>
          <div className="checkout--input">
            <label>Fax</label>
            <input type="number"></input>
          </div>
          <div className="checkout--input">
            <label>Password</label>
            <input type="password"></input>
          </div>
          <div className="checkout--input">
            <label>Confirm Password</label>
            <input type="password"></input>
          </div>
        </form>
        <div className="checkout__button__box">
          <button className="checkout__button__box__button">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
