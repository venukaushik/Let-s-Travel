import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";

const Hero = (props) => {
  return (
    <>
      <Navbar />
      <div className={props.heroCName}>
        <img src={props.heroImg} alt="" />
      </div>
      <div className={props.heroTextCName}>
        <h1>{props.heroTitle}</h1>
        <p>{props.heroText}</p>
        <a className={props.btnClassName} onClick={props.scrollToPlans}>
          {props.btnText}
        </a>
      </div>
    </>
  );
};

export default Hero;
