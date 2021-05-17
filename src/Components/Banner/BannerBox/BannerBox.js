import React from "react";
import "../BannerBox/bannerBox.css";

function BannerBox(props) {
  return (
    <div className={`banner-box ${props.class}`}>
      <div className="banner-content-box">
        <h3>
          {props.title1}
          <br></br>
          {props.title2}
        </h3>
        <div className="underline"></div>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default BannerBox;
