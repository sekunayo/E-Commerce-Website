import React, { useContext } from "react";
import "../Wishlist/wishlist.css";
import { ProductContext } from "../../context/ProductContext.js";

function Wishlist() {
  const { wishlist } = useContext(ProductContext);
  return (
    <>
      <div className="wishlist__form__container">
        <div className="wishlist__form__container__form__box">
          <div className="wishlist__column">
            <h4 className="wishlist__column__heading">{""}</h4>
            {wishlist.map((element) => {
              return (
                <div className="wishlist__column__content">
                  <div className="wishlist__column__content__image">
                    <img
                      src={element.image}
                      alt="wishlist__product__image"
                    ></img>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="wishlist__column">
            <h4 className="wishlist__column__heading">{""}</h4>
            {wishlist.map((element) => {
              return (
                <div className="wishlist__column__content wishlist__column__product__box">
                  <p className="wishlist__product__name">{element.name}</p>
                  <div className="wishlist__additional__info">
                    <p className="wishlist--small">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam fringilla augue nec est tristique auctor. Donec non
                      est at libero vulputate rutrum.
                    </p>
                    <form>
                      <textarea className="wishlist__textbox"></textarea>
                    </form>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="wishlist__column">
            <h4 className="wishlist__column__heading">Quantity</h4>
            {wishlist.map((element) => {
              return (
                <div className="wishlist__column__content center">
                  <form className="wishlist__quantity">
                    <input value="1"></input>
                  </form>
                </div>
              );
            })}
          </div>
          <div className="wishlist__column">
            <h4 className="wishlist__column__heading">Price</h4>
            {wishlist.map((element) => {
              return (
                <div className="wishlist__column__content center">
                  <p className="wishlist__price">${element.price * 2}.00</p>
                </div>
              );
            })}
          </div>
          <div className="wishlist__column">
            <h4 className="wishlist__column__heading">{""}</h4>
            {wishlist.map((_) => {
              return (
                <div className="wishlist__column__content center">
                  <a href="#tag" className="wishlist__link">
                    Edit
                  </a>
                </div>
              );
            })}
          </div>
          <div className="wishlist__column">
            <h4 className="wishlist__column__heading">{""}</h4>
            {wishlist.map((_) => {
              return (
                <div className="wishlist__column__content center">
                  <div className="wishlist--icon">
                    <i class="far fa-trash-alt"></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="checkout__button__box wishlist__footer__button">
        <div className="wishlist__footer__inner__button">
          <button className="wishlist__button__box__button white__button">
            update wishlist
          </button>
          <button className="wishlist__button__box__button white__button">
            add all to cart
          </button>
          <button className="wishlist__button__box__button green__button">
            share wishlist
          </button>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
