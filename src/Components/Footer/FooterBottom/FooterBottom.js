import React from "react";
import { footerPaymentIcons } from "../../../data.js";
import "../FooterBottom/footerBottom.css";

function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="inner-footer-bottom">
        <p>
          Copyright © 2018 &nbsp;
          <span className="footer-bottom-logo">Organic</span> . All Rights
          Reserved.
        </p>
        <div className="footer-payment-container">
          {footerPaymentIcons.map((element, index) => {
            return (
              <div className="footer-payment-box" key={index}>
                <img src={element} alt="footer-payments-platform"></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
