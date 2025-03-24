import './App.css';
import About from './pages/About';
import Footer from './pages/Footer';
import LandingPage from './pages/LandingPage';
import Services from './pages/ServicesComponent';
import React from "react";

function App() {
  return (
    <>
      <LandingPage />
      <Services/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
