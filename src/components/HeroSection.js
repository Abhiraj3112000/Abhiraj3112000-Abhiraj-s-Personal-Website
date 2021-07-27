import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (  
    <div className='hero-container'>
      <video src='/videos/video-5.mp4' style={{filter: "grayscale(100%)", opacity: 1}} autoPlay loop muted />
    </div>
  );
}

export default HeroSection;
