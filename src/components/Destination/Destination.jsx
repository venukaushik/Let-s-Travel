import React from "react";
import "./Destination.css";
import TaalImg1 from "../../assets/1.jpg";
import TaalImg2 from "../../assets/2.jpg";
import MountainImg1 from "../../assets/4.jpg";
import MountainImg2 from "../../assets/5.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <div className="destination-heading">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      </div>
      <DestinationData
        className="popular-destination"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is the second most active volcano found in the province of Batangas. A complex volcano in the middle of Taal Lake and is often called an island within a
          lake, that is an island within a lake that is on an island as well as one of the lowest volcano in the world having 311 meters elevation. It offers a very a spectacular
          view seen from Tagaytay Ridge. Taal volcano is located around 50 kilometers away from Manila, capital of the Philippines."
        img1={TaalImg1}
        img2={TaalImg2}
      />

      <DestinationData
        className="popular-destination reversed"
        heading="Mt. Daguldul, Batangas"
        text="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain."
        img1={MountainImg1}
        img2={MountainImg2}
      />
    </div>
  );
};

export default Destination;
