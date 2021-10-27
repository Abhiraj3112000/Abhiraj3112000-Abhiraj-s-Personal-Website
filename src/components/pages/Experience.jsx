import React from 'react';
import '../../App.css';
import "./Experience.css"
import Navbar from '../Navbar';

function Experience() {
  return (
    <div className="page" >
      <Navbar/>
      <div className="container">
        <div className="image">
          <img src="https://www.coox.in/longLogo.png"/>
        </div>
        <div className="image">
          <img src="/images/nit_dgp_logo.png"/>
        </div>
        <div className="image">
          <img src="https://avatars.githubusercontent.com/u/84704958?s=200&v=4"/>
        </div>
      </div>
    </div>
  );
}

export default Experience;