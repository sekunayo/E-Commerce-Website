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
          <h6>Free & Next Day Delivery</h6>
        </div>
        <div className="feature feature-2">
          <span>
            <i className="fas fa-headphones-alt"></i>
          </span>
          <h6>Support 24/7 For Clients</h6>
        </div>
        <div className="feature feature-3">
          <span>
            <i className="far fa-thumbs-up"></i>
          </span>
          <h6>100% Satisfaction Guarantee</h6>
        </div>
        <div className="feature feature-4">
          <span>
            {" "}
            <i className="fas fa-tag"></i>
          </span>
          <h6>Great Daily Deals Discount</h6>
        </div>
      </div>
    </div>
  );
}

export default Features;
