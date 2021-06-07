import React, { useState, useEffect } from "react";
import Shop from "./Components/Shop/Shop";
import "../src/Components/Shop/shop.css";
import SideBar from "./Components/SideBar/SideBar";
import Slider from "./Components/Slider/Slider";
import { sliderInformation } from "../src/data.js";

function ShopPage() {
  const [displayButton] = useState(false);
  const [slide, setSlide] = useState(0);
  const [slideArray] = useState(sliderInformation);
  useEffect(() => {
    if (slide < 0) {
      setSlide(slideArray.length - 1);
    }
    if (slide > slideArray.length - 1) {
      setSlide(0);
    }
    return slide;
  }, [slide, slideArray]);
  //   const nextSlide = () => {
  //     setSlide((slide) => {
  //       const newSlide = slide + 1;
  //       return checkIndex(newSlide);
  //     });
  //   };
  //   const prevSlide = () => {
  //     setSlide((slide) => {
  //       const newSlide = slide - 1;
  //       return checkIndex(newSlide);
  //     });
  //   };
  useEffect(() => {
    let slides = setInterval(() => {
      setSlide(slide + 1);
    }, 1000);
    return () => {
      clearInterval(slides);
    };
  }, [slide]);

  return (
    <div className="shop">
      <div className="shop__inner__container">
        <div className="shop__inner__container__first__section">
          <SideBar />
        </div>
        <div className="shop__inner__container__second__section">
          <div className="slider-container">
            <div className="inner-slider-container">
              {slideArray.map((element, index) => {
                let position = "nextSlide";
                if (index === slide) {
                  position = "activeSlide";
                }
                if (
                  index === slide - 1 ||
                  (slide === 0 && index === slideArray.length - 1)
                ) {
                  position = "lastSlide";
                }
                return (
                  <Slider
                    image={element.image}
                    slideText={element.text}
                    title={element.title}
                    info={element.info}
                    semiInfo={element.semiInfo}
                    buttonText={element.buttonText}
                    imageContainerClass={position}
                    display={displayButton}
                  />
                );
              })}
            </div>
          </div>

          <div className="shop__inner__container__header">
            <p className="shop__inner__container__header__title">Vegetables</p>
            <div className="shop__inner__container__header__columns">
              <div className="shop__header__icon__container">
                <div className="shop__header__icon">
                  <i class="fas fa-th"></i>
                </div>
                <div className="shop__header__icon">
                  <i class="fas fa-list"></i>
                </div>
              </div>
              <div className="shop__header__select__section">
                <span>Sort By:</span>
                <span>
                  <select className="shop__header__select">
                    <option value="default">Default</option>
                    <option value="default">Name (A - Z)</option>
                    <option value="default">Name (Z - A)</option>
                    <option value="default">Price(Low - High)</option>
                    <option value="default">Price(High - Low)</option>
                    <option value="default">Rating(Highest)</option>
                    <option value="default">Rating(Lowest)</option>
                  </select>
                </span>
              </div>
              <div className="shop__header__select__section">
                <span>Show:</span>
                <span>
                  <select className="shop__header__select">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">25</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
          <Shop />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
