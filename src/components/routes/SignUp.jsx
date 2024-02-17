import React from "react";
import Hero from "../HeroSection/Hero";
import SignUpHeroImg from "../../assets/9.jpg";
import SignUpForm from "../SignUp/SignUpForm";
import Footer from "../Footer/Footer";

const Signup = () => {
  return (
    <div>
      <Hero heroCName="about-hero" heroTextCName="hero-text" heroImg={SignUpHeroImg} heroTitle="SignUp" btnClassName="hide" url="/signup" />
      <SignUpForm />
      <Footer />
    </div>
  );
};

export default Signup;
