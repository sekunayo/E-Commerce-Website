import React, { useState } from "react";
import "../Testimonial/testimonial.css";
import { testimonialInformation } from "../../data.js";

function Testimonial() {
  const [testimonial] = useState(testimonialInformation);
  const [descriptionIndex, setDescriptionIndex] = useState(0);
  const currentElement = testimonialInformation[descriptionIndex];
  const onClickHandler = (index) => (e) => {
    e.preventDefault();
    const newElement = testimonial.findIndex((element) => element.id === index);
    setDescriptionIndex(newElement);
  };
  return (
    <div className="testimonial-container">
      <div className="inner-testimonial-container">
        <div className="testimonial__big__box">
          <div className="testimonial__inner__big__box">
            <h1 className="blog-heading">Testimonials</h1>
            <div className="testimonial-box">
              <div className="testimonial__box__first__box">
                {testimonial.map((element) => {
                  return (
                    <div
                      className="each__testimonial__box"
                      onClick={onClickHandler(element.id)}
                      key={element.id}
                    >
                      <div className="testimonial__image__box">
                        <img src={element.img} alt="testimonial"></img>
                      </div>
                      <div className="testimonial__title__description">
                        <p className="name">{element.name}</p>
                        <p className="title">{element.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="testimonial__box__second__box">
                <div className="testimonial-text-container">
                  <h3 className="testimonial__text__container__heading ">
                    {currentElement.heading}
                  </h3>
                  <p>{currentElement.description}</p>
                  <p>{currentElement["sub-description"]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
