import React, { useState } from "react";
import "../LargeScreenHeader/header.css";
import CountryDropDown from "./CountryDropDown/CountryDropDown.js";
import CurrencyDropDown from "./CurrencyDropDown/CurrencyDropDown.js";
import ServicesDropDown from "./ServicesDropDown/ServicesDropDown.js";
import Navigation from "./Navigation/Navigation.js";
import english from "../../images/flag-english.jpg";
import logo from "../../images/logo.png";

function Header(props) {
  const [country, setCountry] = useState(false);
  const [currency, setCurrency] = useState(false);
  const [service, setService] = useState(false);
  const countryHandler = () => {
    setCountry(!country);
    setCurrency(false);
    setService(false);
  };
  const currencyHandler = () => {
    setCurrency(!currency);
    setCountry(false);
    setService(false);
  };
  const serviceHandler = () => {
    setService(!service);
    setCountry(false);
    setCurrency(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav>
          <div className="left-nav">
            <div className="left-inner-nav">
              <p>Welcome to Organic!</p>
              <ul
                className="drop-down-country relative"
                onClick={countryHandler}
              >
                <li className="special-list-item">
                  <a href="">
                    <span>
                      <img src={english} alt="" srcSet=""></img>
                    </span>
                    <span>English</span>
                    <span>
                      <i className="fas fa-caret-down"></i>
                    </span>
                  </a>
                </li>
                {country && <CountryDropDown />}
              </ul>
              <ul className="relative" onClick={currencyHandler}>
                <li className="special-list-item">
                  <a href="">
                    <span>USD</span>
                    <span className="caret">
                      <i className="fas fa-caret-down"></i>
                    </span>
                  </a>
                </li>
                {currency && <CurrencyDropDown />}
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="right-inner-nav">
              <p>My Account</p>
              <p>Wishlist</p>
              <p>Checkout</p>
              <ul className="relative" onClick={serviceHandler}>
                <li className="special-list-item">
                  <a href="">
                    <span>About us</span>
                    <span className="caret">
                      <i className="fas fa-caret-down"></i>
                    </span>
                  </a>
                </li>
                {service && <ServicesDropDown />}
              </ul>
              <p>Login</p>
            </div>
          </div>
        </nav>
        <div className="logo-nav-container">
          <div className="cart-collection-button">
            <button>
              <span>
                <i className="fas fa-shopping-bag"></i>
              </span>
              <span className="cart-price">2</span>
              <span className="cart-content"> MY BAG / $259.00 </span>
            </button>
          </div>
          <div className="small-modal-container">
            <div className="modal-open-icon">
              <i class="fas fa-bars" onClick={props.onModal}></i>
            </div>
            <div className="logo-container">
              <img src={logo} alt="" srcSet=""></img>
            </div>
          </div>

          <form action="" id="form-search">
            <input
              type="search"
              name=""
              id="search"
              placeholder="Search here..."
            ></input>{" "}
          </form>
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
