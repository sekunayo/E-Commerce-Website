import React from "react";
import "../CompareProduct/compare.css";
import { products } from "../../data.js";
function CompareProduct() {
  const orderProducts = products.slice(3, 7);
  return (
    <>
      <div className="compare__form__container">
        <div className="compare__form__container__form__box">
          <div className="compare__row">
            <h4 className="compare__row__heading">{""}</h4>
            {orderProducts.map((element) => {
              return (
                <div className="compare__row__content">
                  <div className="compare__image__delete">
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="compare__row__content__image">
                    <img src={element.image} alt="compare__product"></img>
                  </div>
                  <h4 className="compare__product__name">{element.name}</h4>
                </div>
              );
            })}
          </div>
          <div className="compare__row">
            <h4 className="compare__row__heading">Description</h4>
            {orderProducts.map((element) => {
              return (
                <div className="compare__row__content compare__row__product__box">
                  <p className="compare--small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    fringilla augue nec est tristique auctor. Donec non est at
                    libero vulputate rutrum.
                  </p>
                </div>
              );
            })}
          </div>
          <div className="compare__row">
            <h4 className="compare__row__heading">Color</h4>
            {orderProducts.map((element) => {
              return (
                <div className="compare__row__content ">
                  <p className="compare--small">{element.color}</p>
                </div>
              );
            })}
          </div>
          <div className="compare__row">
            <h4 className="compare__row__heading">{""}</h4>
            {orderProducts.map((element) => {
              return (
                <div className="compare__footer ">
                  <p className="compare--small ">
                    <span className="new__price">${element.price} - </span>{" "}
                    <span className="old__price">${element.oldPrice}</span>
                  </p>
                  <div className="compare__footer__inner__button">
                    <button className="compare__button__box__button white__button">
                      add to cart
                    </button>
                    <button className="compare__button__box__button white__button">
                      add to compare
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProduct;
