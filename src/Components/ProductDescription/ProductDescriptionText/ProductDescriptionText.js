import React from "react";

function ProductDescriptionText(props) {
  return (
    <div className="productDescription__text__container">
      <h1 className="productDescription__text__container__title">
        Lorem ipsum dolor sit amet
      </h1>
      <div className="productDescription__text__container__review__container">
        <div className="productDescription__text__container__review__container__review__box">
          <span>
            <i className="far fa-star"></i>
          </span>
          <span>
            <i className="far fa-star"></i>
          </span>
          <span>
            <i className="far fa-star"></i>
          </span>
          <span>
            <i className="far fa-star"></i>
          </span>
          <span>
            <i className="far fa-star"></i>
          </span>
        </div>
        <p className="productDescription__text__container__review__container__review__text">
          <span>0</span>
          <span>Review(s)</span>
        </p>
        <p className="productDescription__text__container__review__container__seperator">
          |
        </p>
        <div className="productDescription__text__container__review__container__write__review">
          <p>
            <i className="fas fa-pen"></i>
          </p>
          <p>Write a review</p>
        </div>
      </div>
      <div className="productDescription__text__container__price__box">
        <p>
          <span className="productDescription__text__container__price__box__actual__price">
            {props.price}
          </span>
          <span className="productDescription__text__container__price__box__discounted__price">
            $499.99
          </span>
        </p>
      </div>
      <p className="productDescription__text__container__item__code">
        Item Code : #12345678
      </p>
      <p className="productDescription__text__container__availability">
        Availabilty: In stock
      </p>
      <p className="productDescription__text__container__condition">
        Condition: New
      </p>
      <p className="productDescription__text__container__info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
        augue nec est tristique auctor. Donec non est at libero vulputate
        rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi,
        vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
        Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
        sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
      </p>
      <p className="productDescription__text__container__color__header">
        Available Options :
      </p>
      <div className="productDescription__text__container__color__container">
        <p>Color :</p>
        <div className="productDescription__text__container__color__container__color__box">
          <div className="productDescription__text__container__color__container__color__box__color"></div>
          <div className="productDescription__text__container__color__container__color__box__color"></div>
          <div className="productDescription__text__container__color__container__color__box__color"></div>
          <div className="productDescription__text__container__color__container__color__box__color"></div>
          <div className="productDescription__text__container__color__container__color__box__color"></div>
          <div className="productDescription__text__container__color__container__color__box__color"></div>
        </div>
      </div>
      <div className="productDescription__text__container__buttons__section">
        <div className="productDescription__text__container__quantity__container">
          <p>Qty:</p>
          <div className="productDescription__text__container__quantity__container__operation__box productDescription__text__container--button--style">
            <button>
              <i className="fas fa-minus"></i>
            </button>
          </div>
          <div className="productDescription__text__container__quantity__container__number__box">
            <button disabled="disabled">1</button>
          </div>
          <div className="productDescription__text__container__quantity__container__operation__box productDescription__text__container--button--style">
            <button>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div className="productDescription__text__container__buttons">
          <div className="productDescription__text__container__buttons__add__button">
            <button>Add to Cart</button>
          </div>
          <div className="productDescription__text__container__buttons__wishlist__button productDescription__text__container--button--style">
            <button>
              <i className="fas fa-heart"></i>
            </button>
          </div>
          <div className="productDescription__text__container__buttons__compare__button productDescription__text__container--button--style">
            <button>
              <i className="fas fa-signal"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="productDescription__text__container__share__container">
        <div className="productDescription__text__container__share__container__share__box">
          <p>
            <i className="fas fa-print"></i>
          </p>
          <p>Print</p>
        </div>
        <div className="productDescription__text__container__share__container__share__box">
          <p>
            <i className="far fa-envelope"></i>
          </p>
          <p>Send to a friend</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionText;
