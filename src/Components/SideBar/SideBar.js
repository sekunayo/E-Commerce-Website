import React from "react";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__section">
        <h4 className="sidebar__section__header">Shop by</h4>
        <h4 className="sidebar__title special--padding">Shopping Options</h4>
        <ul className="sidebar__list">
          <h4 className="sidebar__title"> Price</h4>
          <li>
            $0.00-$99.9 <span>(6)</span>
          </li>
          <li>
            $100.00 and above<span>(6)</span>
          </li>
        </ul>
        <ul className="sidebar__list">
          <h4 className="sidebar__title">Manufacturer</h4>
          <li>
            Colorido<span>(20)</span>
          </li>
          <li>
            Adidas<span>(25)</span>
          </li>
          <li>
            Barisa Epic<span>(8)</span>
          </li>
          <li>
            Esbeda<span>(5)</span>
          </li>
        </ul>
        <ul className="sidebar__input__list">
          <h4 className="sidebar__title">Handbag Material</h4>
          <li>
            <input type="checkbox"></input>Beaded
          </li>
          <li>
            <input type="checkbox"></input>Canvas
          </li>
          <li>
            <input type="checkbox"></input>Velvet
          </li>
          <li>
            <input type="checkbox"></input>Rubber
          </li>
          <li>
            <input type="checkbox"></input>Leather
          </li>
        </ul>
        <ul className="sidebar__list">
          <h4 className="sidebar__title">Color</h4>
          <li>
            Green<span>(1)</span>
          </li>
          <li>
            White<span>(5)</span>
          </li>
          <li>
            Black<span>(5)</span>
          </li>
          <li>
            Gray<span>(4)</span>
          </li>
          <li>
            Dark Gray<span>(3)</span>
          </li>
          <li>
            Blue<span>(1)</span>
          </li>
        </ul>
      </div>
      <div className="sidebar__section">
        <h4 className="sidebar__section__header">Price</h4>
        <ul className="sidebar__list">
          <li>
            <input type="checkbox"></input>$20 - $50 (5)
          </li>
          <li>
            <input type="checkbox"></input>$50 - $100 (10)
          </li>
          <li>
            <input type="checkbox"></input>$100 - $250 (12)
          </li>
        </ul>
      </div>
      <div className="sidebar__section">
        <h4 className="sidebar__section__header">My cart</h4>
        <ul className="sidebar__list">
          <li>
            <p>There are 3 items in your cart</p>
          </li>
          <li>
            <p>Cart Subtotal: $227.99</p>
          </li>
          <div>
            <button className="wishlist__button__box__button white__button">
              compare
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
