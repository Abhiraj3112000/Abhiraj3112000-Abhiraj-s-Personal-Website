import React from 'react';
import '../../App.css';
import "./Experience.css"
import Navbar from '../Navbar';

const Experiences = [
  {
    Title: "",
    Position: "",
    Image: "https://www.coox.in/longLogo.png",
    Desc: "" ,
    TimeLine: ""
  },{
    Title: "",
    Position: "",
    Image: "/images/nit_dgp_logo.png",
    Desc: "" ,
    TimeLine: ""
  },{
    Title: "",
    Position: "",
    Image: "https://avatars.githubusercontent.com/u/84704958?s=200&v=4",
    Desc: "" ,
    TimeLine: ""
  }
]

function Experience() {
  return (
    <>
      <Navbar/>
      <div className="container ">
        {
          Experiences.map((Element, Index) => {
            return <div key={Index} className='row m-1 py-0' style={{ width: "100%" }}>
              <div className='col-1'>
              </div>
              <div className='col-3'>
                <img src={Element.Image} alt={Element.Title} style={{ width: "90%" }} />
              </div>
              <div className='col-8'>
                <table className='table table-dark'>
                  <tbody>
                    <tr>
                      <th>Title</th>
                      <td>{Element.Title}</td>
                    </tr>
                    <tr>
                      <th>Position</th>
                      <td>{Element.Position}</td>
                    </tr>
                    <tr>
                      <th>Desc</th>
                      <td>{Element.Desc}</td>
                    </tr>
                    <tr>
                      <th>TimeLine</th>
                      <td>{Element.TimeLine}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          })
        }
      </div>
    </>
  );
}

export default Experience;