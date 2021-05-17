import React, { useState } from "react";
import "../SliderText/slidertext.css";

function SliderText(props) {
  return (
    <div className="slider-info-container">
      <p className="slider-title">{props.title}</p>
      <p className="slider-info">{props.info}</p>
      <p className="slider-semi-info">{props.semiInfo}</p>
      <div className="slider-button-container">
        <button className="slider-button">{props.buttonText}</button>
      </div>
    </div>
  );
}

export default SliderText;
