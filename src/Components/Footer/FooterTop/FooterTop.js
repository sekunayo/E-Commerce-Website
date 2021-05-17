import React from "react";
import logo from "../../../images/footer-logo.png";
import { footerTopInfo } from "../../../data.js";
import "../FooterTop/footerTop.css";

function FooterTop() {
  return (
    <div className="footer-top">
      <div className="inner-footer-top-container">
        <div className="footer-logo-container">
          <img src={logo} alt="" srcSet=""></img>
        </div>
        <div className="footer-contact-box">
          {footerTopInfo.map((element) => {
            return (
              <div className="footer-contact" key={element.id}>
                <div className="footer-icon-rect-box">
                  <i className={element.class}></i>
                </div>
                <p>{element.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
