import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../HeroSection/Hero";
import ContactHeroImg from "../../assets/2.jpg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero heroCName="about-hero" heroTextCName="hero-text" heroImg={ContactHeroImg} heroTitle="Contact" btnClassName="hide" url="/contact" />
    </div>
  );
};

export default Contact;
