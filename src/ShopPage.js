// import React, { useState } from "react";
// import Shop from "./Components/Shop/Shop";
// import "../src/Components/Shop/shop.css";
// import SideBar from "./Components/SideBar/SideBar";
// import Slider from "./Components/Slider/Slider";
// import { sliderInformation, list } from "../src/data.js";

// function ShopPage() {
//   const [slide, setSlide] = useState(0);
//   const eachSlide = list[slide];
//   const slideIndex = sliderInformation[slide];
//   const [displayButton, setDisplayButton] = useState(false);

//   const checkIndex = (index) => {
//     if (index < 0) {
//       return list.length - 1;
//     } else if (index > list.length - 1) {
//       return 0;
//     } else {
//       return index;
//     }
//   };
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
//   return (
//     <div className="shop">
//       <div className="shop__inner__container">
//         <div className="shop__inner__container__first__section">
//           <SideBar />
//         </div>
//         <div className="shop__inner__container__second__section">
//           <Slider
//             image={eachSlide}
//             next={nextSlide}
//             prev={prevSlide}
//             slideText={eachSlide}
//             title={slideIndex.title}
//             info={slideIndex.info}
//             semiInfo={slideIndex.semiInfo}
//             buttonText={slideIndex.buttonText}
//             imageContainerClass={"shop__slider__image__container"}
//             display={displayButton}
//           />
//           <div className="shop__inner__container__header">
//             <p className="shop__inner__container__header__title">Vegetables</p>
//             <div className="shop__inner__container__header__columns">
//               <div className="shop__header__icon__container">
//                 <div className="shop__header__icon">
//                   <i class="fas fa-th"></i>
//                 </div>
//                 <div className="shop__header__icon">
//                   <i class="fas fa-list"></i>
//                 </div>
//               </div>
//               <div className="shop__header__select__section">
//                 <span>Sort By:</span>
//                 <span>
//                   <select className="shop__header__select">
//                     <option value="default">Default</option>
//                     <option value="default">Name (A - Z)</option>
//                     <option value="default">Name (Z - A)</option>
//                     <option value="default">Price(Low - High)</option>
//                     <option value="default">Price(High - Low)</option>
//                     <option value="default">Rating(Highest)</option>
//                     <option value="default">Rating(Lowest)</option>
//                   </select>
//                 </span>
//               </div>
//               <div className="shop__header__select__section">
//                 <span>Show:</span>
//                 <span>
//                   <select className="shop__header__select">
//                     <option value="5">5</option>
//                     <option value="10">10</option>
//                     <option value="15">15</option>
//                     <option value="20">25</option>
//                   </select>
//                 </span>
//               </div>
//             </div>
//           </div>
//           <Shop />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShopPage;
