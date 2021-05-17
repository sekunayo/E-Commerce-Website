import React from "react";

function SliderArrows(props) {
  return (
    <>
      <div className="arrow-left" onClick={props.prev}>
        <i className="fas fa-angle-left"></i>
      </div>
      <div className="arrow-right">
        <i className="fas fa-angle-right" onClick={props.next}></i>
      </div>
    </>
  );
}

export default SliderArrows;
