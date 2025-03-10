import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faUserNurse, faTruck } from "@fortawesome/free-solid-svg-icons";
import "./Services.css";

const services = [
  {
    icon: faUserMd,
    title: "Pharmasist Consultation",
    description: "Get Expert Medical Advice From Our Qualified Pharmasists.",
  },
  {
    icon: faUserNurse,
    title: " Free Nursing Services",
    description:     <>
    Professional Nursing Care At Your Convenience{" "}
    <span>  Measuring Blood Pressure, Oxygen Saturation In Blood, Glucose In Blood, Injections And Sutures</span>
  </>
  },
  {
    icon: faTruck,
    title: "Medicine Delivery",
    description: "Fast and reliable delivery of medicines to your doorstep.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null); 

  return (
    <section className="services">
  <h2 className="services-title">Our Services</h2>
  <div className="services-container">
    {services.map((service, index) => (
      <div 
        key={index} 
        className={`service-card ${index === activeIndex ? "active" : ""}`} 
        onClick={() => setActiveIndex(index)}
      >
        <FontAwesomeIcon icon={service.icon} className="service-icon" />
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default Services;
