import React from "react";
import BannerBox from "./BannerBox/BannerBox";
import BannerImage from "./BannerImage/BannerImage";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import { bannerInformation } from "../../data.js";
import "../Banner/banner.css";

function Banner() {
  const firstBanner = bannerInformation[0];
  const secondBanner = bannerInformation[1];
  const thirdBanner = bannerInformation[2];
  return (
    <div className="banner-container">
      <div className="inner-banner-container">
        <BannerImage image={banner1} />
        <BannerBox {...firstBanner} className={"yellow-banner"} />
        <BannerImage image={banner2} />
        <BannerBox {...secondBanner} className={"green-banner"} />
        <BannerImage image={banner3} />
        <BannerBox {...thirdBanner} className={"blue-banner"} />
      </div>
    </div>
  );
}

export default Banner;
