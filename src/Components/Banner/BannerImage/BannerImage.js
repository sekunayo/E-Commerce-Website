import React from "react";
import "../BannerImage/bannerImage.css";

function BannerImage(props) {
  return (
    <div class="banner-image-box">
      <img src={props.image} alt="" srcset=""></img>
    </div>
  );
}

export default BannerImage;
