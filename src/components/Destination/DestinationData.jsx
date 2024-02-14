import React from "react";

const DestinationData = (props) => {
  return (
    <div className={props.className}>
      <div className="destination-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="destination-img">
        <img src={props.img1} alt="" />
        <img src={props.img2} alt="" />
      </div>
    </div>
  );
};

export default DestinationData;
