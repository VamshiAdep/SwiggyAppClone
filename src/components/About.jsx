   import React from "react";
import '../Stylecomponents/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-description">
        We are a team of passionate individuals dedicated to bringing you the best service and products. Our mission is to provide exceptional value and an outstanding experience to all our users.
      </p>
      <section className="about-section">
        <h2>Our Values</h2>
        <ul className="about-values">
          <li>Customer Satisfaction</li>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Teamwork</li>
        </ul>
      </section>
      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <h3>Rushikesh Kamurti</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="team-member">
          <h3>Bharat Dussa</h3>
          <p>CTO</p>
        </div>
        <div className="team-member">
          <h3>Vamshi Adep</h3>
          <p>Lead Designer</p>
        </div>
      </section>
    </div>
  );
};

export default About;
