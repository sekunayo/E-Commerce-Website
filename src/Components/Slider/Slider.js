import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Slider/slider.css";
import "../Slider/SliderArrows/SliderArrows.js";
import SliderArrows from "../Slider/SliderArrows/SliderArrows.js";
function Slider(props) {
  const [arrow, setArrow] = useState(false);

  const onMouseMove = () => {
    setArrow(!arrow);
  };
  const onMouseLeave = () => {
    setArrow(false);
  };
  return (
    <article
      className={props.imageContainerClass}
      onMouseEnter={onMouseMove}
      onClick={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <img src={props.image} alt="slider" srcSet=""></img>
      {arrow && <SliderArrows next={props.next} prev={props.prev} />}
      <div className="slider-info-container">
        <p className="slider-title">{props.title}</p>
        <p className="slider-info">{props.info}</p>
        <p className="slider-semi-info">{props.semiInfo}</p>
        <div className="slider-button-container">
          {props.display && (
            <Link to="/shop" className="nav__link">
              <button className="slider-button">
                {props.buttonText}{" "}
                <span>
                  <i className="fas fa-caret-right"></i>
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default Slider;
