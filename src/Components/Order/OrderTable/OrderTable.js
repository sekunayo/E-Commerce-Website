import React from "react";

function OrderTable(props) {
  let sum = props.products
    .map((element) => Number(element.price))
    .reduce((acc, current) => {
      return acc + current;
    }, 0);

  return (
    <div className="order__form__container">
      <div className="order__form__container__form__box">
        <div className="order__column">
          <h4 className="order__column__heading">Product</h4>
          {props.products.map((element) => {
            return (
              <div className="order__column__content">
                <div className="order__column__content__image">
                  <img src={element.image} alt="order__image"></img>
                </div>
              </div>
            );
          })}
        </div>
        <div className="order__column">
          <h4 className="order__column__heading">Description</h4>
          {props.products.map((element) => {
            return (
              <div className="order__column__content order__column__product__box">
                <p className="order__product__name">{element.name}</p>
                <div className="order__additional__info">
                  <p className="order--small"> sku : {element.code}</p>
                  <p className="order--small">color : {element.color}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="order__column">
          <h4 className="order__column__heading">Avail.</h4>
          {props.products.map((element) => {
            return (
              <div className="order__column__content">
                <div className="">
                  <button className="order__availability">
                    {element.availability}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="order__column">
          <h4 className="order__column__heading">Unit Price</h4>
          {props.products.map((element) => {
            return (
              <div className="order__column__content">
                <p className="order__price">${element.price}</p>
              </div>
            );
          })}
        </div>
        <div className="order__column">
          <h4 className="order__column__heading">Qty</h4>
          {props.products.map((element) => {
            return (
              <div className="order__column__content">
                <form className="order__quantity__grid">
                  <input value="1"></input>
                  <button>+</button>
                  <button>-</button>
                </form>
              </div>
            );
          })}
        </div>
        <div className="order__column">
          <h4 className="order__column__heading">Total</h4>
          {props.products.map((element) => {
            return (
              <div className="order__column__content">
                <p className="order__price">${element.price * 2}.00</p>
              </div>
            );
          })}
        </div>
        <div className="order__column">
          <h4 className="order__column__heading">
            <i class="far fa-trash-alt"></i>
          </h4>
          {props.products.map((_) => {
            return (
              <div className="order__column__content">
                <div className="order--icon">
                  <i class="fas fa-times"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="order__footer">
        <div className="order__footer__inner__1">
          <p className="special__order__column__inner__heading">
            Total Products (tax incl.)
          </p>
        </div>
        <div className="order__footer__inner__2">
          <p className="special__order__column__inner__heading"> ${sum}.00</p>
        </div>
        <div className="order__footer__inner__3">
          <h4 className="special__order__column__inner__heading">
            <strong>Total</strong>
          </h4>
        </div>
        <div className="order__footer__inner__4">
          <h4 className="special__order__column__inner__heading">
            <strong>${sum}.00</strong>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default OrderTable;
