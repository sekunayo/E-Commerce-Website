import React from "react";
import "../Error/error.css";
import errorSignal from "../../images/signal.png";
function Error() {
  return (
    <div class="error">
      <div class="error__inner__container">
        <div class="error__inner__container__body">
          <h2>404</h2>
          <h3 class="error__inner__container__body__error__text">
            <span>
              <img src={errorSignal} alt="error__image"></img>
            </span>
            <span>Oops! The Page you requested was not found!</span>
          </h3>
          <button>Back to home</button>
        </div>
      </div>
    </div>
  );
}

export default Error;
