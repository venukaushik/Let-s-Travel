import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../HeroSection/Hero";
import ContactHeroImg from "../../assets/2.jpg";
import ContactUs from "../ContactUs/ContactUs";

const Contact = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero heroCName="about-hero" heroTextCName="hero-text" heroImg={ContactHeroImg} heroTitle="Contact Us" btnClassName="hide" url="/contact" />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
