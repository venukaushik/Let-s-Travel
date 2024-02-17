import React from "react";
import "./RecentTrips.css";
import RecentTripsData from "./RecentTripsData";
import CardImg1 from "../../assets/5.jpg";
import CardImg2 from "../../assets/6.jpg";
import CardImg3 from "../../assets/7.jpg";

const RecentTrips = () => {
  return (
    <>
      <div className="recent-trips">
        <div className="heading">
          <h1>Recent Trips</h1>
          <p>You can discover unique destinations using Google Maps.</p>
        </div>
        <div className="trip-cards">
          <RecentTripsData
            img={CardImg1}
            heading="Tour in Indonesia"
            text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands,
          including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
          />
          <RecentTripsData
            img={CardImg2}
            heading="Tour in Malaysia"
            text="Malaysia is a Southeast Asian country occupying parts of Malay Peninsula and the island of Borneo. It's known for its beaches, rain forests and mix of Malay, Chinese, Indian and European cultural influences."
          />
          <RecentTripsData
            img={CardImg3}
            heading="Tour in France"
            text="France, in Western europe encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower"
          />
        </div>
      </div>
    </>
  );
};

export default RecentTrips;
