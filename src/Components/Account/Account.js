import React from "react";
import "../Account/account.css";

function Account() {
  return (
    <div class="account">
      <div class="account__inner__container">
        <div class="account__inner__container__title">
          <h1>Login or create an account</h1>
        </div>
        <div class="account__inner__container__body">
          <div class="account__inner__container__body__first__container">
            <div class="account__inner__container__body__first__container__text">
              <p>
                <strong class="account__inner__container__body--strong--text">
                  New Customers
                </strong>
              </p>
              <p class="account--small--font--size">
                By creating an account with our store, you will be able to move
                through the checkout process faster, store multiple shipping
                addresses, view and track your orders in your account and more.
              </p>
              <div class="account__inner__container__body__first__container__text__button">
                <button class="account--button--style">
                  Create an account
                </button>
              </div>
            </div>
          </div>
          <div class="account__inner__container__body__second__container">
            <div class="account__inner__container__body__second__container__text">
              <p>
                <strong class="account__inner__container__body--strong--text">
                  Registered Customers
                </strong>
              </p>
              <p class="account--small--font--size">
                {" "}
                If you have an account with us, please log in.
              </p>
              <form class="account__inner__container__body__second__container__form">
                <div class="account__inner__container__body__second__container__form__email">
                  <label for="email">
                    Email Address{" "}
                    <span class="account--required--field">*</span>
                  </label>
                  <input type="email" name="email" id="" required></input>
                </div>
                <div class="account__inner__container__body__second__container__form__password">
                  <label for="password">
                    Password <span class="account--required--field">*</span>
                  </label>
                  <input type="password" name="password" id="" required></input>
                </div>
              </form>
              <p class="account--required--field"> * Required Fields</p>
              <div class="account__inner__container__body__second__container__text__button">
                <button class="account--button--style">login</button>
                <p class="account--forgot--password">Forgot your password</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
