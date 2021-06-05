import React from "react";
import "../ShopItem/shopItem.css";

function ShopItem(props) {
  return (
    <div className="shop__item">
      <div className="shop__item__image">
        <img src={props.image}></img>
      </div>
      <div className="shop__item__description">
        <h4 className="shop__item__description__name">{props.name}</h4>
        <div className="shop__item__description__text">
          <p>
            {props.description}
            <a>Learn More</a>
          </p>
        </div>
        <p className="shop__item__description__price">
          <span className="old__price light--shade">${props.oldPrice}</span>
          <span className="new__price">${props.newPrice}</span>
        </p>
        <div className="shop__item__footer">
          <button className="shop__item__button__box__button white__button">
            add to cart
          </button>
          <button className="shop__item__button__box__button white__button">
            add to wishlist
          </button>
          <button className="shop__item__button__box__button white__button">
            add to compare
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
