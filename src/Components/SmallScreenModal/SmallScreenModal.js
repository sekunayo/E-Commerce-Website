import React from "react";
import "../SmallScreenModal/smallScreenModal.css";

function SmallScreenModal(props) {
  return (
    <div className="small-screen-modal">
      <div className="topmost-nav">
        <div className="modal-search-container">
          <form>
            <input type="search" placeholder="Search..."></input>
          </form>
          <div className="modal-search-icon">
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="close-modal">
          <i className="fas fa-times" onClick={props.offModal}></i>
        </div>
      </div>
      <div className="close-modal"></div>
      <div className="modal-nav-link uppercase">
        <p>Home</p>
        <div className="modal-plus-icon">
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <div className="modal-nav-link uppercase">
        <p>Pages</p>
        <div className="modal-plus-icon">
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <div className="modal-nav-link uppercase">
        <p>Fruits</p>
        <div className="modal-plus-icon">
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <div className="modal-nav-link uppercase">
        <p>Vegetables</p>
        <div className="modal-plus-icon">
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <div className="modal-nav-link uppercase">
        <p>Healthy Eating</p>
      </div>
      <div className="modal-nav-link uppercase">
        <p>Drinks</p>
      </div>
      <div className="modal-nav-link uppercase">
        <p>Blog</p>
      </div>
      <div className="modal-nav-link uppercase">
        <p>Contact Us</p>
      </div>
      <div className="modal-nav-link lowercase">
        <p>My Account</p>
      </div>
      <div className="modal-nav-link lowercase">
        <p>Wishlist</p>
      </div>
      <div className="modal-nav-link lowercase">
        <p>Checkout</p>
      </div>
      <div className="modal-nav-link lowercase">
        <p>Blog</p>
      </div>
      <div className="modal-nav-link lowercase special-modal-nav-link">
        <p>Login</p>
      </div>
    </div>
  );
}

export default SmallScreenModal;
