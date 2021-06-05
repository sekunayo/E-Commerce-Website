import React from "react";

function ProductDescriptionText(props) {
  return (
    <div class="productDescription__text__container">
      <h1 class="productDescription__text__container__title">
        Lorem ipsum dolor sit amet
      </h1>
      <div class="productDescription__text__container__review__container">
        <div class="productDescription__text__container__review__container__review__box">
          <span>
            <i class="far fa-star"></i>
          </span>
          <span>
            <i class="far fa-star"></i>
          </span>
          <span>
            <i class="far fa-star"></i>
          </span>
          <span>
            <i class="far fa-star"></i>
          </span>
          <span>
            <i class="far fa-star"></i>
          </span>
        </div>
        <p class="productDescription__text__container__review__container__review__text">
          <span>0</span>
          <span>Review(s)</span>
        </p>
        <p class="productDescription__text__container__review__container__seperator">
          |
        </p>
        <div class="productDescription__text__container__review__container__write__review">
          <p>
            <i class="fas fa-pen"></i>
          </p>
          <p>Write a review</p>
        </div>
      </div>
      <div class="productDescription__text__container__price__box">
        <p>
          <span class="productDescription__text__container__price__box__actual__price">
            {props.price}
          </span>
          <span class="productDescription__text__container__price__box__discounted__price">
            $499.99
          </span>
        </p>
      </div>
      <p class="productDescription__text__container__item__code">
        Item Code : #12345678
      </p>
      <p class="productDescription__text__container__availability">
        Availabilty: In stock
      </p>
      <p class="productDescription__text__container__condition">
        Condition: New
      </p>
      <p class="productDescription__text__container__info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
        augue nec est tristique auctor. Donec non est at libero vulputate
        rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi,
        vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.
        Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
        sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
      </p>
      <p class="productDescription__text__container__color__header">
        Available Options :
      </p>
      <div class="productDescription__text__container__color__container">
        <p>Color :</p>
        <div class="productDescription__text__container__color__container__color__box">
          <div class="productDescription__text__container__color__container__color__box__color"></div>
          <div class="productDescription__text__container__color__container__color__box__color"></div>
          <div class="productDescription__text__container__color__container__color__box__color"></div>
          <div class="productDescription__text__container__color__container__color__box__color"></div>
          <div class="productDescription__text__container__color__container__color__box__color"></div>
          <div class="productDescription__text__container__color__container__color__box__color"></div>
        </div>
      </div>
      <div class="productDescription__text__container__buttons__section">
        <div class="productDescription__text__container__quantity__container">
          <p>Qty:</p>
          <div class="productDescription__text__container__quantity__container__operation__box productDescription__text__container--button--style">
            <button>
              <i class="fas fa-minus"></i>
            </button>
          </div>
          <div class="productDescription__text__container__quantity__container__number__box">
            <button disabled="disabled">1</button>
          </div>
          <div class="productDescription__text__container__quantity__container__operation__box productDescription__text__container--button--style">
            <button>
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="productDescription__text__container__buttons">
          <div class="productDescription__text__container__buttons__add__button">
            <button>Add to Cart</button>
          </div>
          <div class="productDescription__text__container__buttons__wishlist__button productDescription__text__container--button--style">
            <button>
              <i class="fas fa-heart"></i>
            </button>
          </div>
          <div class="productDescription__text__container__buttons__compare__button productDescription__text__container--button--style">
            <button>
              <i class="fas fa-signal"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="productDescription__text__container__share__container">
        <div class="productDescription__text__container__share__container__share__box">
          <p>
            <i class="fas fa-print"></i>
          </p>
          <p>Print</p>
        </div>
        <div class="productDescription__text__container__share__container__share__box">
          <p>
            <i class="far fa-envelope"></i>
          </p>
          <p>Send to a friend</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionText;
