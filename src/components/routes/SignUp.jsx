import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../HeroSection/Hero";
import SignUpHeroImg from "../../assets/9.jpg";
import SignUp from "..//SingUp/SignUp";
import Footer from "../Footer/Footer";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <Hero heroCName="about-hero" heroTextCName="hero-text" heroImg={SignUpHeroImg} heroTitle="SignUp" btnClassName="hide" url="/signup" />
      <SignUp />
      <Footer />
    </div>
  );
};

export default Signup;
