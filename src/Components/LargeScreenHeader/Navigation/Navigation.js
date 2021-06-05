import React from "react";
import { Link } from "react-router-dom";
import "../Navigation/navigation.css";
function Navigation() {
  return (
    <div className="navigation-container">
      <div className="inner-navigation-container">
        <p>
          <Link to="/" className="nav__link">
            Home
          </Link>
        </p>
        <p>Features</p>
        <p>Blog</p>
        <p>
          <Link to="/shop" className="nav__link">
            Shop
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Navigation;
