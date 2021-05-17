import React from "react";
import { brandContainer } from "../../data.js";
import "../Sponsor/sponsor.css";

function Sponsor() {
  return (
    <div className="sponsor-container">
      <div className="inner-sponsor-container">
        {/* <div className="sponsor-image-box"><img src="./brand1.png" alt=""></div> */}
        {brandContainer.map((element, index) => {
          return (
            <div className="sponsor-image-box">
              <img src={element} alt="" key={index}></img>
            </div>
          );
        })}
        {/* <div className="sponsor-image-box"><img src="./brand2.png" alt=""></div> */}
      </div>
    </div>
  );
}

export default Sponsor;
