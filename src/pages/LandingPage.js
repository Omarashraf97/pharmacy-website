import React from 'react';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const LandingPage = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <h2>Al-Nawawy Pharmacy</h2>
        </div>
        <a href="https://wa.me/01095092953" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          01095092953
        </a>
      </header>

      <section className="home">
        <div className="home-content">
          <h1>Serving Your Health Is Our Priority</h1>
          <p>Your Trusted Neighborhood Pharmacy</p>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Write your Name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="example@email.com" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="Write your number" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Please type your message here..."></textarea>
            </div>
            <button type="submit" className="send-message">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;