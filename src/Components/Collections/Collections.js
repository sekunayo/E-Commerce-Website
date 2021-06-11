import React from "react";
import "../Collections/collections.css";
function Collections(props) {
  return (
    <div className="collections__box">
      <div className="collections-image-box">
        <img src={props.image} alt="" srcSet=""></img>
      </div>
      <div className="collection-text">
        <p className="title">{props.title}</p>
        <h3 className="info">{props.info}</h3>
      </div>
    </div>
  );
}

export default Collections;
