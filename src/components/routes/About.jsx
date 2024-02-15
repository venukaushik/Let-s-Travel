import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../HeroSection/Hero";
import AboutHeroImg from "../../assets/night.jpg";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero heroCName="about-hero" heroTextCName="hero-text" heroImg={AboutHeroImg} heroTitle="About" btnClassName="hide" url="/about" />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
