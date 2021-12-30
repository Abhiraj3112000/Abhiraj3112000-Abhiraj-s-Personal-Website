import React, { useEffect } from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import './Achievements.css'
import Aos from "aos";
import "aos/dist/aos.css";

const achievementsinfoList = [
  [
    {
        title: "Hello I am Abhiraj",
        date: "56343434343434584",
        image: "/images/profile_pic.jpg",
        url: 'profile_pic.jpg'
    },{
      title: "564654645",
      date: "45634654654",
      image: "",
      url: ''
    },
  ],[
    {
        title: "",
        date: "",
        image: "",
        url: ''
    },
  ],
]

const achieListView = [
  {
    subject: "Internship",
    mapper: 0
  },{
    subject: "Course",
    mapper: 1
  },
]


function Achievements() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Navbar/>
      <h1>Achievements Page</h1>
      <div className="container" id="Achievements">
          {
              achieListView.map((oneSub, idx) => {
                  return <div key={idx}>
                      <h3 data-aos="slide-right" id="main-h3" style={{ fontWeight: 'bolder' }}
                      data-aos-delay={idx >= 1? "400": "1000"}>{oneSub.subject}</h3>
                      <div style={{ marginTop: '1rem', marginBottom: '3rem', display: "flex", flexWrap: "wrap"}}>
                          {
                              achievementsinfoList[oneSub.mapper].map((oneInfo, index) => {
                                return (
                                  <a  key={index} data-aos="fade-up"
                                  data-aos-delay={idx >= 1? "400": "1000"}
                                  style={{ backgroundImage: "url(" + oneInfo.image + ")",
                                      backgroundPosition: "center", cursor: 'pointer', textDecoration: 'none',
                                      backgroundSize: "cover", backgroundRepeat: "no-repeat"
                                  }} id="main-card-achie" title='View Certificate'
                                  href={oneInfo.url !== '#' ? oneInfo.url: oneInfo.image} 
                                  target="_blank" rel="noopener noreferrer">
                                  <br />
                                  <div id="main-card-text-achie">
                                      <h3>{oneInfo.title}</h3>
                                      <p>{oneInfo.date}</p>
                                  </div>
                                </a>
                                  )
                              })
                          }
                      </div>
                  </div>
              })
          }
      </div>
    </>
  );
}

export default Achievements;