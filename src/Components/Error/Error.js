import React from "react";
import "../Error/error.css";
import errorSignal from "../../images/signal.png";
function Error() {
  return (
    <div className="error">
      <div className="error__inner__container">
        <div className="error__inner__container__body">
          <h2>404</h2>
          <h3 className="error__inner__container__body__error__text">
            <span>
              <img src={errorSignal} alt="error"></img>
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
