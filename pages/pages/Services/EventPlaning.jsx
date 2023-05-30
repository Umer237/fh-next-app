import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const EventPlaning = () => {
  return (
    <>
    <Header/>
      <div className="Event-Planning-Top-Text">
        <h2>EVENT PLANNING, MANAGEMENT & EXECUTION</h2>
      </div>
      <div className="Event-Planning-Flex">
      <div className="Event-Planning-Text">
        <h2>EVENT PLANNING, MANAGEMENT & EXECUTION</h2>
        <h4>
          FH knows what the market demands and plans, manages and executes
          corporate events, trade exhibitions, conferences, seminars, festivals
          in a manner that will ensure an unforgettable event leading to the
          required publicity and promotion culminating into revenue.
        </h4>
        <h5>Concept Coordination management and control culmination</h5>
        <h4>
          FH's creative management team conceptualizes and delivers the best
          events converting leads to potential customers. From the theme to the
          venue, risk assessment, security to post-event management. We know
          what the target audience wants and have the determination to pull off
          a successful event.
        </h4>
      </div>
      <div className="Event-Planning-img">
        <img src="https://assets.entrepreneur.com/content/3x2/2000/start-event-planning-service.jpg" alt="" />
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default EventPlaning;
