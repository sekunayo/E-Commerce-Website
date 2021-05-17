import React from "react";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterMiddle from "./FooterMiddle/FooterMiddle";
import FooterTop from "./FooterTop/FooterTop";

function Footer() {
  return (
    <footer>
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  );
}

export default Footer;
