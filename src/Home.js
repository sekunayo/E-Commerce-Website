import Features from "./Components/Features/Features.js";
import Slider from "./Components/Slider/Slider";
import { useState, useEffect } from "react";
import Collections from "./Components/Collections/Collections";
import BestSelling from "./Components/BestSelling/BestSelling";
import FeaturedProduct from "./Components/FeaturedProduct/FeaturedProduct.js";
import { sliderInformation, collectionsInformation } from "./data.js";
import Banner from "./Components/Banner/Banner";
import Blog from "./Components/Blog/Blog";
import Sponsor from "./Components/Sponsor/Sponsor";
import Testimonial from "./Components/Testimonial/Testimonial";
// import ProductContext from "./context/ProductContext.js";

function Home() {
  const [slide, setSlide] = useState(0);
  const [slideArray, setSlideArray] = useState(sliderInformation);
  const [displayButton, setDisplayButton] = useState(true);
  useEffect(() => {
    if (slide < 0) {
      setSlide(slideArray.length - 1);
    }
    if (slide > slideArray.length - 1) {
      setSlide(0);
    }
    return slide;
  }, [slide, slideArray]);

  // const nextSlide = () => {
  //   setSlide((slide) => {
  //     const newSlide = slide + 1;
  //     return checkIndex(newSlide);
  //   });
  // };
  // const prevSlide = () => {
  //   setSlide((slide) => {
  //     const newSlide = slide - 1;
  //     return checkIndex(newSlide);
  //   });
  // };

  useEffect(() => {
    let slides = setInterval(() => {
      setSlide(slide + 1);
    }, 1000);
    return () => {
      clearInterval(slides);
    };
  }, [slide]);

  return (
    <div className="home__section__2">
      <Features />
      {/* <Slider
        image={eachSlide}
        // next={nextSlide}
        // prev={prevSlide}
        slideText={eachSlide}
        title={slideIndex.title}
        info={slideIndex.info}
        semiInfo={slideIndex.semiInfo}
        buttonText={slideIndex.buttonText}
        sliderContainerClass={"slider-container"}
        imageContainerClass={"image-container"}
        display={displayButton}
      /> */}

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
      <div className="collections-container">
        <div class="inner-collections-container">
          {collectionsInformation.map((element) => (
            <Collections
              title={element.title}
              info={element.info}
              key={element.id}
              image={element.image}
            />
          ))}
        </div>
      </div>
      <BestSelling />
      <FeaturedProduct />
      <Banner />
      <Testimonial />
      <Blog />
      {/* <Sponsor /> */}
    </div>
  );
}

export default Home;
