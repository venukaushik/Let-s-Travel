import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../HeroSection/Hero";
import RecentTrips from "../RecentTrips/RecentTrips";
import ServiceHeroImg from "../../assets/3.jpg";
import Footer from "../Footer/Footer";

const Service = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero heroCName="about-hero" heroTextCName="hero-text" heroImg={ServiceHeroImg} heroTitle="Service" btnClassName="hide" url="/service" />
      <RecentTrips />
      <Footer />
    </div>
  );
};

export default Service;
