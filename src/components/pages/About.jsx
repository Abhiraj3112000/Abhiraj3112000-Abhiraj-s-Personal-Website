import React from "react";
import "../../App.css";
import "./About.css";
import Navbar from "../Navbar";
import Typed from "react-typed";

function About() {
  return (
    <center className="about-page" style={{ haight: "100vh" }}>
      <Navbar />
      <div className="about-title" >
        <img className="about-title-image" src="images/profile_pic.jpg" alt="my photograph"/>
        <center className="about-typed">
       Abhiraj 
       <hr style={{width:"25%"}}></hr>
       Chatterjee
       <hr style={{width:"25%"}}></hr>
      </center>
      {/* <center className="about-typed">
      <Typed
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
      />
      </center> */}
      </div>
      <div className="about-parent">
        <div className="about-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui
          est, imperdiet eu ullamcorper in, euismod at dolor. Mauris imperdiet
          sapien felis, sagittis finibus augue blandit eget. Praesent tempus
          dolor ac lobortis tempus. Donec odio lorem, imperdiet ac nisl ut,
          dictum condimentum nulla. Praesent scelerisque orci volutpat, mollis
          neque eu, vestibulum tortor. Curabitur sed rutrum orci, eget
          sollicitudin turpis. Praesent rhoncus elementum tincidunt.
          Pellentesque pharetra tellus facilisis finibus rutrum. Sed nec leo a
          eros rhoncus mollis. Etiam efficitur ligula laoreet erat sodales, non
          cursus nunc iaculis. Suspendisse nunc turpis, mattis eget erat non,
          suscipit mattis augue. Quisque sodales feugiat blandit. Phasellus at
          varius ex. Curabitur et libero ligula. Nam vel dui ultricies lacus
          consequat feugiat non ac velit. Proin vulputate mattis leo, et varius
          urna aliquet at. Maecenas tortor massa, mollis eget nunc id, cursus
          egestas lacus. Phasellus facilisis felis ac nulla ullamcorper
          imperdiet. Nullam aliquam non massa ut vestibulum. Duis id accumsan
          urna. Mauris ac viverra risus, ac semper lectus. Pellentesque sodales
          sed ante at feugiat. Donec consectetur odio et nunc faucibus, id
          semper neque sollicitudin. Suspendisse potenti. Donec tempor elit eu
          laoreet vehicula. Nulla eget viverra quam. In hac habitasse platea
          dictumst. Nam non nisl sem. Praesent suscipit nibh et pulvinar
          placerat. Sed fermentum porttitor lectus, id suscipit urna dapibus
          quis. Curabitur ut facilisis tortor. Suspendisse ac dolor a tellus
          
        </div>
      </div>
    </center>
  );
}

export default About;
