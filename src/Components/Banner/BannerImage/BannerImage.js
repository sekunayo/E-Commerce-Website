import React from "react";
import "../BannerImage/bannerImage.css";

function BannerImage(props) {
  return (
    <div className="banner-image-box">
      <img src={props.image} alt=""></img>
    </div>
  );
}

export default BannerImage;
