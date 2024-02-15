import React from "react";
import "./AboutUs.css";
import HistoryImg from "../../assets/history.jpg";
import MissionImg from "../../assets/mission.jpg";
import VisionImg from "../../assets/vision.jpg";
import AboutUsData from "./AboutUsData";

const AboutUs = () => {
  return (
    <div className="about-us">
      <AboutUsData
        containerCName="first container"
        imgCName="img"
        img={HistoryImg}
        text="container-text"
        title="Our History"
        desc="Welcome to Let's Travel - Tours and Travels, where every journey is an adventure waiting to unfold. Founded in 2020, our story began with a passion for exploration and a commitment to providing unparalleled travel experiences. <br /> From humble beginnings as a small boutique agency, Let's Travel has grown into a trusted name in the travel industry. Over the years, we've curated an extensive portfolio of destinations, each offering a unique tapestry of culture, history, and natural beauty. Our journey is defined by our dedication to exceeding expectations, fostering meaningful connections, and creating memories that last a lifetime.Whether you're embarking on a solo expedition, a romantic getaway, or a family vacation, Let's Travel is here to turn your dreams into reality. As we continue to expand our horizons and explore new frontiers, our mission remains the same: to inspire, to connect, and to enrich lives through the power of travel.<br /> Join us as we write the next chapter in the Let's Travel story, one unforgettable adventure at a time."
      />
      <AboutUsData
        containerCName="second container"
        imgCName="img"
        img={MissionImg}
        text="container-text"
        title="Our Mission"
        desc="At Let's Travel - Tours and Travels, our mission is simple: to ignite the spirit of wanderlust and transform ordinary trips into extraordinary experiences. We believe that travel has the power to inspire, educate, and unite people from all walks of life. That's why we're dedicated to curating immersive journeys that not only showcase the beauty of our world but also celebrate its diversity and richness. Driven by our passion for exploration and a deep respect for the places we encounter, we're constantly seeking new ways to enhance the travel experience for our customers. Whether it's through innovative itineraries, personalized service, or meaningful connections, we're always striving to exceed expectations and create memories that will last a lifetime. <br /> Join us in our mission to discover the world, embrace new cultures, and forge unforgettable memories. Together, let's embark on a journey of discovery, adventure, and endless possibilities. <br /> Welcome to Let's Travel - Tours and Travels. Where will your next adventure take you?"
      />
      <AboutUsData
        containerCName="first container"
        imgCName="img"
        img={VisionImg}
        text="container-text"
        title="Our History"
        desc="At Let's Travel - Tours and Travels, our vision is to be the premier provider of transformative travel experiences, inspiring wanderers to explore the world with curiosity, respect, and enthusiasm. <br /> We envision a future where travel transcends boundaries, fostering connections that bridge cultures, generations, and perspectives. Through our dedication to innovation, sustainability, and customer satisfaction, we aim to set the standard for excellence in the travel industry. Our vision extends beyond mere sightseeing; it encompasses a deeper understanding and appreciation of the diverse tapestry of our planet. <br /> Join us as we embark on this journey towards a world where travel is not just a means of getting from one place to another, but a transformative experience that enriches lives and broadens horizons. <br /> Welcome to Let's Travel - Tours and Travels. Together, let's explore the world and make unforgettable memories along the way."
      />
    </div>
  );
};

export default AboutUs;
