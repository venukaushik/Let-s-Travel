import React from "react";
import "./Plans.css";
import Paris from "../../assets/paris.jpg";
import Lakshaydweep from "../../assets/lakshaydweep.jpg";
import Seychelles from "../../assets/Seychelles.jpg";
import PlansData from "./PlansData";

const Plans = (props) => {
  return (
    <div ref={props.planRef} className="plans">
      <h1>Travel Plans</h1>
      <div className="plan-cards">
        <PlansData
          planCard="plan-card"
          cardImg={Paris}
          cardHeading="Paris"
          rating1="fa-solid fa-star"
          rating2="fa-solid fa-star"
          rating3="fa-solid fa-star"
          rating4="fa-solid fa-star"
          rating5="fa-solid fa-star-half-stroke"
          cardTitle="France"
          price="₹ 2,25,000"
          flight="2 Flights"
          hotel="1 Hotel"
          activity="2 Activity"
          transfer="2 Transfer"
          meal="Meals"
          interpretation="Interpretation"
          support="24/7 Support"
          wifi="Free Wifi"
        />
        <PlansData
          ribbonCName="ribbon"
          ribbonText="Popular"
          planCard="plan-card popular"
          cardImg={Lakshaydweep}
          cardHeading="Lakshaydweep"
          rating1="fa-solid fa-star"
          rating2="fa-solid fa-star"
          rating3="fa-solid fa-star"
          rating4="fa-solid fa-star"
          rating5="fa-solid fa-star"
          cardTitle="India"
          price="₹ 1,50,000"
          flight="2 Flights"
          hotel="1 Hotel"
          activity="2 Activity"
          transfer="2 Transfer"
          meal="Meals"
          interpretation="Interpretation"
          support="24/7 Support"
          wifi="Free Wifi"
        />
        <PlansData
          planCard="plan-card"
          cardImg={Seychelles}
          cardHeading="Seychelles"
          rating1="fa-solid fa-star"
          rating2="fa-solid fa-star"
          rating3="fa-solid fa-star"
          rating4="fa-solid fa-star-half-stroke"
          rating5="fa-regular fa-star"
          cardTitle="South Africa"
          price="₹ 2,55,000"
          flight="2 Flights"
          hotel="1 Hotel"
          activity="2 Activity"
          transfer="2 Transfer"
          meal="Meals"
          interpretation="Interpretation"
          support="24/7 Support"
          wifi="Free Wifi"
        />
      </div>
    </div>
  );
};

export default Plans;
