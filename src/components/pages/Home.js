import React, { useEffect } from "react";
import "../../App.css";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Typed from "react-typed";
import Navbar from "../Navbar";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <center className="home-page" style={{ haight: "100vh" }}>
      <Navbar />

     <br/>
      {/* <Typed
        className="home-typed"
        style={{
          color: "#c42756",
          textShadow: "1px 1px 0px white",
          // marginLeft: "5%",
          fontSize: "50px",
          fontFamily: "'Montserrat', sans-serif",
          marginTop: "200px",
        }}
        strings={[
          "Abhiraj",
          "Chatterjee",
        ]}
        typeSpeed={70}
        backSpeed={90}
        loop
      /> */}
      <div className="home-parent">
        <img
          data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          src="/images/hello-robo.gif"
          alt="hello gif"
          className="home-gif"
        />
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          className="home-info"
          style={{
           
          }}
        >
          Hello, I am  <NavLink style={{textDecoration: "none"}} exact to="/about"><span style={{color:"white", fontSize:"2rem"}}>Abhiraj Chatterjee</span></NavLink>, a junior
          Computer Science student from KIIT, Bbsr. I am a Full stack 
          Web Developer, an Android developer and a Machine Learning Enthusiast.
          I also like competitive coding and Poetry. 
          {/* Know more about me {" "}
          <NavLink
            exact
            to="/about"
            style={{
              // textDecoration: "none",
              textShadow: "none",
              color: "white",
              fontFamily: "'Montserrat', sans-serif"
            }}
          >
           here
          </NavLink>. */}
        </div>
        {/* <Link
         exact
         to="/experience"
          className="home-info agile"
          style={{
            textShadow: "0 0 3px black, 0 0 5px black",
            marginLeft: "1%",
          }}
        >
          Projects
        </Link> */}
        <a
          href="https://www.wattpad.com/user/chat_abhiraj"
          target="_blank"
          className="home-info agile"
          style={{
            textShadow: "0 0 3px black, 0 0 5px black",
            marginLeft: "1%",
          }}
          rel="noreferrer noopener"
        >
          Read My Poems
        </a>
        <a
          href="https://abhiraj3112000.medium.com/"
          target="_blank"
          className="home-info agile"
          style={{
            textShadow: "0 0 3px black, 0 0 5px black",
            marginLeft: "1%",
          }}
          rel="noreferrer noopener"
        >
          Read My Blogs
        </a>
        {/* <Link
         exact
         to="/contact"
          className="home-info agile"
          style={{
            textShadow: "0 0 3px black, 0 0 5px black",
            marginLeft: "1%",
          }}
        >
          Contact
        </Link> */}
      </div>
    </center>
  );
}

export default Home;
