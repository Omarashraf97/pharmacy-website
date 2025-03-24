import React from "react";
import "./About.css";
import doctorImage from "../assets/img/OIP.jpeg"; 

const About = () => {
  return (
    <section className="About">
      <div className="About-content">
        <h4 className="subtitle">Why Choose Us</h4>
        <h2 className="title">
          We Made it Health Care <br /> Easy for your family
        </h2>
        <p className="description">
          We Exist In The Market Since 1992 .
          Most Medicines Of Shortage Exist .
        </p>
      </div>
      <div className="doctor-image-container">
        <img src={doctorImage} alt="Doctor" className="doctor-image" />
    
      </div>
    </section>
  );
};

export default About;
