import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../HeroSection/Hero";
import ServiceHeroImg from "../../assets/3.jpg";

const Service = () => {
  return (
    <div>
      <Navbar />
      <Hero heroCName="about-hero" heroTextCName="hero-text" heroImg={ServiceHeroImg} heroTitle="Service" btnClassName="hide" url="/service" />
    </div>
  );
};

export default Service;
