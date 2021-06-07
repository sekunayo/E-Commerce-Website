import React from "react";
import { footerNavLinks, footerSocialIcons } from "../../../data.js";
import "../FooterMiddle/footerMiddle.css";

function FooterMiddle() {
  return (
    <div className="footer-middle">
      <div className="inner-footer-middle">
        {footerNavLinks.map((element, index) => {
          return (
            <div className="footer-nav-link-container" key={index}>
              <h5 className="footer-header-nav-link">{element.title}</h5>
              <ul>
                {element.links.map((element, index) => (
                  <li className="footer-nav-link" key={index}>
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <div className="footer-nav-link-container">
          <h3 className="footer-header-nav-link">Subscribe</h3>
          <div className="footer-special-nav-container">
            <p>
              Subscribe to be the first to know about Sales, Events, and
              Exclusive Offers!
            </p>
            <form action="">
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter Your email"
              ></input>
              <button type="submit">
                <span>
                  <i className="fas fa-envelope"></i>
                </span>
                <span>Subscribe</span>
              </button>
            </form>
            <div className="footer-social-container">
              <h5 className="footer-header-nav-link">Follow us</h5>
              <div className="footer-inner-social-container">
                {footerSocialIcons.map((element, index) => {
                  return (
                    <div className="footer-social-icons" key={index}>
                      <i className={element}></i>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterMiddle;
