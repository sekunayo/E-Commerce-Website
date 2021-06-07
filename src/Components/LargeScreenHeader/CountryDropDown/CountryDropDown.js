import React from "react";
import brazil from "../../../../src/images/flag-brazil.jpg";
import french from "../../../../src/images/flag-default.jpg";
import german from "../../../../src/images/flag-german.jpg";
import english from "../../../../src/images/flag-english.jpg";
import chile from "../../../../src/images/flag-chile.jpg";
import spain from "../../../../src/images/flag-spain.jpg";

function CountryDropDown() {
  return (
    <ul name="" id="" className="inner-country-dropdown absolute ">
      <li>
        <a href="#tag">
          <span>
            <img src={english} alt="country__logo"></img>
          </span>
          <span>English</span>
        </a>
      </li>
      <li>
        <a href="#tag">
          <span>
            <img src={french} alt="country__logo"></img>
          </span>
          <span>French</span>
        </a>
      </li>
      <li>
        <a href="#tag">
          <span>
            <img src={german} alt="country__logo"></img>
          </span>
          <span>German</span>
        </a>
      </li>
      <li>
        <a href="#tag">
          <span>
            <img src={brazil} alt="country__logo"></img>
          </span>
          <span>Brazil</span>
        </a>
      </li>
      <li>
        <a href="#tag">
          <span>
            <img src={chile} alt="country__logo"></img>
          </span>
          <span>Chile</span>
        </a>
      </li>
      <li>
        <a href="#tag">
          <span>
            <img src={spain} alt="country__logo"></img>
          </span>
          <span>Spain</span>
        </a>
      </li>
    </ul>
  );
}

export default CountryDropDown;
