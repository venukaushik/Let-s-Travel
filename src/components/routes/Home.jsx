import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../HeroSection/Hero";
import HeroImg from "../../assets/hero-img.jpg";
import Destination from "../Destination/Destination";
import RecentTripsData from "../RecentTrips/RecentTrips";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
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
      <Destination />
      <RecentTripsData />
      <Footer />
    </>
  );
};

export default Home;
