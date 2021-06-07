import React, { useState, useEffect } from "react";
import "../Testimonial/testimonial.css";
import { testimonialInformation } from "../../data.js";

function Testimonial() {
  const [slider, setSlider] = useState(0);
  const [allPictures] = useState(testimonialInformation);
  const lastIndex = testimonialInformation.length - 1;

  useEffect(() => {
    if (slider < 0) {
      setSlider(lastIndex);
    }
    if (slider > lastIndex) {
      setSlider(0);
    }
  }, [slider, lastIndex]);

  useEffect(() => {
    let slideInterval = setInterval(() => {
      setSlider(slider + 1);
    }, 6000);
    return () => {
      clearInterval(slideInterval);
    };
  }, [slider]);
  return (
    <div className="testimonial-container">
      <div className="inner-testimonial-container">
        <h3 className="blog-heading">What people are saying</h3>
        <div className="testimonial-box">
          <div className="inner-testimonial-box">
            <div className="testimonial-pictures-container">
              {allPictures.map((element) => {
                let active = "testimonial-image-box";
                if (Number(element.id) === slider) {
                  active = "testimonial-active-box";
                }

                return (
                  <div className={`${active}`} key={element.id}>
                    <img src={element.img} alt=""></img>
                  </div>
                );
              })}
            </div>
            <div className="testimonial-text-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. .
              </p>
            </div>
            {/* <div className="testimonial-footer">
              <p className="name">{allPictures[slider].name}</p>
              <p className="title">{allPictures[slider].title}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
