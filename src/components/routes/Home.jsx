import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../HeroSection/Hero";
import HeroImg from "../../assets/hero-img.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        heroCName="hero"
        heroTextCName="hero-text"
        heroImg={HeroImg}
        heroTitle="Start Your Journey"
        heroText="Choose Your Favourite Destination"
        btnText="Travel Plan"
        btnClassName="show"
        url="/"
      />
    </div>
  );
};

export default Home;
