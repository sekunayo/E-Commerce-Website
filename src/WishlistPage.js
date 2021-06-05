import React from "react";
import Wishlist from "./Components/Wishlist/Wishlist";
import "../src/Components/Wishlist/wishlist.css";

function WishlistPage() {
  return (
    <div className="wishlist">
      <div className="wishlist__inner">
        <div className="wishlist__inner__container__1">
          <h1 className="wishlist__inner__container__header">my wishlist</h1>
          <Wishlist />
        </div>
        <div className="wishlist__inner__container__2">
          <div className="wishlist__account__section">
            <h4 className="wishlist__account__section__header">MY account</h4>
            <ul className="wishlist__account__list">
              <li>Account Dashboard</li>
              <li>Account Information</li>
              <li>Address Book</li>
              <li>My Orders</li>
              <li>Billing Agreements</li>
              <li>Recurring Policies</li>
              <li>My Product Reviews</li>
              <li>My Tags</li>
              <li>My Wishlist</li>
              <li>My Downloadable</li>
              <li>Newsletter Subscriptions</li>
            </ul>
          </div>
          <div className="wishlist__compare__section">
            <h4 className="wishlist__compare__section__header">
              compare products
            </h4>
            <ul className="wishlist__compare__list">
              <li>
                Balls vs Sofa
                <div className="wishlist--icon">
                  <i class="fas fa-times wishlist__compare__icon"></i>
                </div>
              </li>
              <li>
                Cups vs Plates
                <div className="wishlist--icon">
                  <i class="fas fa-times wishlist__compare__icon"></i>
                </div>
              </li>
              <div className="wishlist__footer__inner__button">
                <button className="wishlist__button__box__button white__button">
                  compare
                </button>
                <button className="wishlist__button__box__button orange__button">
                  clear
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;
