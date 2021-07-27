import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Hireme() {
  return (
    <div className="page">
      <Navbar/>
      {/* <HeroSection /> */}
      <h1>Hire Me Page</h1>
      <Footer />
    </div>
  );
}

export default Hireme;