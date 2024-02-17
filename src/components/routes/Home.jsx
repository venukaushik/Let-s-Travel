import React, { useRef } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../HeroSection/Hero";
import HeroImg from "../../assets/hero-img.jpg";
import Destination from "../Destination/Destination";
import RecentTripsData from "../RecentTrips/RecentTrips";
import Footer from "../Footer/Footer";
import Plans from "../Plans/Plans";
import Modal from "../Modal/Modal";

const Home = () => {
  const plansRef = useRef(null);
  const scrollToPlans = () => {
    plansRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Modal />
      <Hero
        heroCName="hero"
        heroTextCName="hero-text"
        heroImg={HeroImg}
        heroTitle="Start Your Journey"
        heroText="Choose Your Favourite Destination"
        btnText="Travel Plans"
        btnClassName="show btn"
        url="/"
        scrollToPlans={scrollToPlans}
      />
      <Destination />
      <RecentTripsData />
      <Plans planRef={plansRef} />
      <Footer />
    </>
  );
};

export default Home;
