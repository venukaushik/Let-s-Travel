import React from "react";

const PlansData = (props) => {
  return (
    <div className={props.planCard}>
      <div className={props.ribbonCName}>{props.ribbonText}</div>
      <img src={props.cardImg} alt="" />
      <div className="container-flex">
        <h2>{props.cardHeading}</h2>
        <div className="rating">
          <i className={props.rating1}></i>
          <i className={props.rating2}></i>
          <i className={props.rating3}></i>
          <i className={props.rating4}></i>
          <i className={props.rating5}></i>
        </div>
      </div>
      <div className="container-flex">
        <p className="card-title">{props.cardTitle}</p>

        <p>{props.price}</p>
      </div>
      <div className="plan-divider"></div>
      <div className="perks">
        <div className="perk">
          <i className="fa-solid fa-plane"></i>
          <p>{props.flight}</p>
        </div>
        <div className="perk">
          <i className="fa-solid fa-hotel"></i>
          <p>{props.hotel}</p>
        </div>
        <div className="perk">
          <i className="fa-solid fa-person-hiking"></i>
          <p>{props.activity}</p>
        </div>
        <div className="perk">
          <i className="fa-solid fa-taxi"></i>
          <p>{props.transfer}</p>
        </div>
        <div className="perk">
          <i className="fa-solid fa-utensils"></i>
          <p>{props.meal}</p>
        </div>
        <div className="perk">
          <i className="fa-solid fa-language"></i>
          <p>{props.interpretation} </p>
        </div>
        <div className="perk">
          <i className="fa-solid fa-phone"></i>
          <p>{props.support}</p>
        </div>
        <div className="perk">
          <i className="fa-solid fa-wifi"></i>
          <p>{props.wifi}</p>
        </div>
      </div>
      <button className="btn">Subscribe Now</button>
    </div>
  );
};

export default PlansData;
