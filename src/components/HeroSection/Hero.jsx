import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <>
      <div className={props.heroCName}>
        <img src={props.heroImg} alt="" />
      </div>
      <div className={props.heroTextCName}>
        <h1>{props.heroTitle}</h1>
        <p>{props.heroText}</p>
        <a href={props.url} className={props.btnClassName}>
          {props.btnText}
        </a>
      </div>
    </>
  );
};

export default Hero;
