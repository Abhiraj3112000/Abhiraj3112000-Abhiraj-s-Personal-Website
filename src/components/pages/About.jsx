import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

function About() {
  return (
    <div className="page">
      <Navbar/>
      {/* <HeroSection /> */}
      <h1>About Page</h1>
      <Footer />
    </div>
  );
}

export default About;