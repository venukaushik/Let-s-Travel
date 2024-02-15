import React from "react";
import "./RecentTrips.css";

const RecentTripsData = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default RecentTripsData;
