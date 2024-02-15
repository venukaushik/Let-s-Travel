import React from "react";
import "./AboutUs.css";

const AboutUsData = (props) => {
  return (
    <div className={props.containerCName}>
      <div className={props.imgCName}>
        <img src={props.img} alt="" />
      </div>
      <div className={props.text}>
        <h2>{props.title}</h2>
        <p>
          <div dangerouslySetInnerHTML={{ __html: props.desc.replace(/\n/g, "<br />") }}></div>
        </p>
      </div>
    </div>
  );
};

export default AboutUsData;
