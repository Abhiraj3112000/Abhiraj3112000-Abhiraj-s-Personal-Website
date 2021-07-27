import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Academics() {
  return (
    <div className="page">
      <Navbar/>
      {/* <HeroSection /> */}
      <h1>Academics Page</h1>
      <Footer />
    </div>
  );
}

export default Academics;