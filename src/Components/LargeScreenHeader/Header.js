import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../LargeScreenHeader/header.css";
import CountryDropDown from "./CountryDropDown/CountryDropDown.js";
import CurrencyDropDown from "./CurrencyDropDown/CurrencyDropDown.js";
import ServicesDropDown from "./ServicesDropDown/ServicesDropDown.js";
import Navigation from "./Navigation/Navigation.js";
import english from "../../images/flag-english.jpg";
import logo from "../../images/logo.png";
import CartOverlay from "../Cart/CartOverlay/CartOverlay";
import { ProductContext } from "../../context/ProductContext";
function Header(props) {
  const [country, setCountry] = useState(false);
  const [currency, setCurrency] = useState(false);
  const [service, setService] = useState(false);
  const [cartList, setCartList] = useState(false);
  const { cart, cartTotal } = useContext(ProductContext);

  const countryHandler = () => {
    return () => {
      setCountry(!country);
      setCurrency(false);
      setService(false);
    };
  };
  const currencyHandler = () => {
    return () => {
      setCurrency(!currency);
      setCountry(false);
      setService(false);
    };
  };
  const serviceHandler = () => {
    return () => {
      setService(!service);
      setCountry(false);
      setCurrency(false);
    };
  };
  const displayCart = () => {
    return (e) => {
      e.preventDefault();
      setCartList(!cartList);
    };
  };
  const onMouseLeave = () => {
    return (e) => {
      e.preventDefault();
      setCartList(false);
    };
  };

  return (
    <header className="header">
      <div className="header-container">
        <nav>
          <div className="left-nav">
            <div className="left-inner-nav">
              <p className="left__inner__nav__text">Welcome to Organic!</p>
              <ul
                className="drop-down-country relative"
                onClick={countryHandler()}
              >
                <li className="special-list-item">
                  <a href="#tag">
                    <span className="header__country__image">
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
              <ul className="relative" onClick={currencyHandler()}>
                <li className="special-list-item">
                  <a href="#tag">
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
              <p>
                <Link to="/account" className="nav__link">
                  My Account
                </Link>
              </p>
              <p>
                <Link to="/wishlist" className="nav__link">
                  Wishlist
                </Link>
              </p>
              <p>
                <Link to="/checkout" className="nav__link">
                  Checkout
                </Link>
              </p>
              <ul className="relative" onClick={serviceHandler()}>
                <li className="special-list-item">
                  <a href="#tag">
                    <span>About us</span>
                    <span className="caret">
                      <i className="fas fa-caret-down"></i>
                    </span>
                  </a>
                </li>
                {service && <ServicesDropDown />}
              </ul>
              <p>
                <Link to="/account" className="nav__link">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </nav>
        <div className="logo-nav-container">
          <div className="cart-collection-buttons">
            <button
              className="cart-collection-button"
              onClick={displayCart()}
              onMouseLeave={onMouseLeave()}
            >
              <span>
                <i className="fas fa-shopping-bag cart-collection-buttons-icon"></i>
              </span>
              <span className="cart-price">{cart.length}</span>
              <span className="cart-content"> MY BAG / ${cartTotal} </span>
              {cartList && <CartOverlay />}
            </button>
          </div>
          <div className="small-modal-container">
            <div className="modal-open-icon">
              <i className="fas fa-bars" onClick={props.onModal}></i>
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
