import React, { useState } from "react";
import "../Slider/slider.css";
import "../Slider/SliderArrows/SliderArrows.js";
import SliderArrows from "../Slider/SliderArrows/SliderArrows.js";
import SliderText from "./SliderText/SliderText.js";
function Slider(props) {
  const [arrow, setArrow] = useState(false);
  const onMouseMove = () => {
    setArrow(!arrow);
  };
  const onMouseLeave = () => {
    setArrow(false);
  };
  return (
    <div className="slider-container">
      <div className="inner-slider-container">
        <div
          className="image-container"
          onMouseEnter={onMouseMove}
          onClick={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <img src={props.image} alt="" srcSet=""></img>
          {arrow && <SliderArrows next={props.next} prev={props.prev} />}
          <SliderText
            title={props.title}
            info={props.info}
            semiInfo={props.semiInfo}
            buttonText={props.buttonText}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
