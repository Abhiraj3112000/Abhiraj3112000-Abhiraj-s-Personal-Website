import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import './Home.css';
import Navbar from "../Navbar";

function Home() {
   return (
    <center className="home-page" style={{haight:"100vh"}} >
      <Navbar />
      {/* <HeroSection /> */}
      <h1 style={{color:"white", marginLeft:"5%", marginTop:"30px"}}>Abhiraj Chatterjee</h1>
      <div className="home-parent">
            <img  src="/images/hello-transparent-2.gif" alt="hello gif" className="home-gif"/>
        
          <div className="home-info">

            Hola, I am Abhiraj, a University Student Persuing my 5th semester of Computer Science and Engineering from
            KIIT, Bbsr. I am a MERN stack Web Developer, an Android developer and a Machine Learning Enthusiast. I 
            also like competitive coding. Know more about me here.
          </div>
          <div className="home-info">

            Hola, I am Abhiraj, a University Student Persuing my 5th semester of Computer Science and Engineering from
            KIIT, Bbsr. I am a MERN stack Web Developer, an Android developer and a Machine Learning Enthusiast. I 
            also like competitive coding. Know more about me here.
          </div>
          <div className="home-info">

            Hola, I am Abhiraj, a University Student Persuing my 5th semester of Computer Science and Engineering from
            KIIT, Bbsr. I am a MERN stack Web Developer, an Android developer and a Machine Learning Enthusiast. I 
            also like competitive coding. Know more about me here.
          </div>
          <div className="home-info">

            Hola, I am Abhiraj, a University Student Persuing my 5th semester of Computer Science and Engineering from
            KIIT, Bbsr. I am a MERN stack Web Developer, an Android developer and a Machine Learning Enthusiast. I 
            also like competitive coding. Know more about me here.
          </div>
          <div className="home-info">

            Hola, I am Abhiraj, a University Student Persuing my 5th semester of Computer Science and Engineering from
            KIIT, Bbsr. I am a MERN stack Web Developer, an Android developer and a Machine Learning Enthusiast. I 
            also like competitive coding. Know more about me here.
          </div>
      </div>
      <Footer/>
    </center>
  );
}

export default Home;
