import "./app.css";
import Header from "./Components/LargeScreenHeader/Header.js";
import Features from "./Components/Features/Features.js";
import Slider from "./Components/Slider/Slider";
import { useState } from "react";
import Collections from "./Components/Collections/Collections";
import BestSelling from "./Components/BestSelling/BestSelling";
import FeaturedProduct from "./Components/FeaturedProduct/FeaturedProduct.js";
import { sliderInformation, collectionsInformation, list } from "./data.js";
import Banner from "./Components/Banner/Banner";
import Blog from "./Components/Blog/Blog";
import Sponsor from "./Components/Sponsor/Sponsor";
import Footer from "./Components/Footer/Footer";
import Testimonial from "./Components/Testimonial/Testimonial";
import SmallScreenModal from "./Components/SmallScreenModal/SmallScreenModal.js";

function Home() {
  const [slide, setSlide] = useState(0);
  const eachSlide = list[slide];
  const slideIndex = sliderInformation[slide];
  const [showModal, setshowModal] = useState(false);
  const onModal = () => {
    setshowModal(true);
  };
  const offModal = () => {
    setshowModal(false);
  };
  const checkIndex = (index) => {
    if (index < 0) {
      return list.length - 1;
    } else if (index > list.length - 1) {
      return 0;
    } else {
      return index;
    }
  };
  const nextSlide = () => {
    setSlide((slide) => {
      const newSlide = slide + 1;
      return checkIndex(newSlide);
    });
  };
  const prevSlide = () => {
    setSlide((slide) => {
      const newSlide = slide - 1;
      return checkIndex(newSlide);
    });
  };

  return (
    <div className="app-container">
      <Header onModal={onModal} />
      {showModal && <SmallScreenModal offModal={offModal} />}
      {/* <Features /> */}
      <Slider
        image={eachSlide}
        next={nextSlide}
        prev={prevSlide}
        slideText={eachSlide}
        title={slideIndex.title}
        info={slideIndex.info}
        semiInfo={slideIndex.semiInfo}
        buttonText={slideIndex.buttonText}
      />
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
      <Footer />
    </div>
  );
}

export default Home;
