import React from "react";
import "../Features/features.css";

function Features() {
  return (
    <div className="features-container">
      <div className="inner-features-container">
        <div className="feature feature-1">
          <span>
            <i className="fas fa-plane"></i>
          </span>
          <p>Free & Next Day Delivery</p>
        </div>
        <div className="feature feature-2">
          <span>
            <i className="fas fa-headphones-alt"></i>
          </span>
          <p>Support 24/7 For Clients</p>
        </div>
        <div className="feature feature-3">
          <span>
            <i className="far fa-thumbs-up"></i>
          </span>
          <p>100% Satisfaction Guarantee</p>
        </div>
        <div className="feature feature-4">
          <span>
            {" "}
            <i className="fas fa-tag"></i>
          </span>
          <p>Great Daily Deals Discount</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
