import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../HeroSection/Hero";
import AboutHeroImg from "../../assets/night.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero heroCName="about-hero" heroTextCName="hero-text" heroImg={AboutHeroImg} heroTitle="About" btnClassName="hide" url="/about" />
    </div>
  );
};

export default About;
