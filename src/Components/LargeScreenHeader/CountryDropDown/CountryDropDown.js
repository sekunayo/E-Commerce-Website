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
        <a>
          <span>
            <img src={english} alt="" srcSet=""></img>
          </span>
          <span>English</span>
        </a>
      </li>
      <li>
        <a>
          <span>
            <img src={french} alt="" srcSet=""></img>
          </span>
          <span>French</span>
        </a>
      </li>
      <li>
        <a>
          <span>
            <img src={german} alt="" srcSet=""></img>
          </span>
          <span>German</span>
        </a>
      </li>
      <li>
        <a>
          <span>
            <img src={brazil} alt="" srcSet=""></img>
          </span>
          <span>Brazil</span>
        </a>
      </li>
      <li>
        <a>
          <span>
            <img src={chile} alt="" srcSet=""></img>
          </span>
          <span>Chile</span>
        </a>
      </li>
      <li>
        <a>
          <span>
            <img src={spain} alt="" srcSet=""></img>
          </span>
          <span>Spain</span>
        </a>
      </li>
    </ul>
  );
}

export default CountryDropDown;
