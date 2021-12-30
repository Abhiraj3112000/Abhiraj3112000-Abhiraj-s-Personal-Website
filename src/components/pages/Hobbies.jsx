import React, { Component } from 'react';
import '../../App.css';
import './Hobbies.css';
import Navbar from '../Navbar';
import Aos from "aos";
import "aos/dist/aos.css";

const hobbiesinfoList = [
    {
        title: "Coding",
        img: "/images/profile_pic.jpg" ,
        desc: "I love to code, reading documentations, discussing new technologies with my friends, learning programming languages, searching, googling, getting new ideas to implement which is all my day."
    },{
        title: "Learning",
        img: "/images/profile_pic.jpg" ,
        desc: "As soon as you feel learning as a hobby, you will never be unmotivated to do something new, to learn, to increase your knowledge, improving your skills. That is what I do to keep me motivated."
    }
];

export default class Hobbies extends Component {

    constructor(props) {
        super(props);
        Aos.init({ duration: 1500 })
    }

    render() {
        return (<>
               <Navbar/>
                <div className="container" id="Hobbies" style={{ margin: "2rem auto", padding: "0" }}>
                    <h3 data-aos="slide-right" id="main-h3">Hobbies</h3>
                    <div style={{ marginTop: '1rem', display: "flex", flexWrap: "wrap"}}>
                        {
                            hobbiesinfoList.map((oneInfo, index) => {
                                return <div id="main-card" data-aos="fade-up" 
                                data-aos-delay={String(300 + index*100)}
                                key={index} style={{
                                backgroundImage: "url(" + oneInfo.img + ")",
                                backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                                            <br />
                                            <div id="main-card-text">
                                                <h3>{oneInfo.title}</h3>
                                                <p>{oneInfo.desc}</p>
                                            </div>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </> 
        )}
}

// function Hobbies() {
//   return (
//     <div className="page">
//       <Navbar/>
//         <h1>Hobbies Page</h1>
//         <hr/>
//     <table>
//         <tr id="header">
//             <th>First name</th>
//             <th>Last name</th>
//             <th>Age</th>
//             <th>Country</th>
//             <th>Gender</th>
//         </tr>
//         <tr>
//             <td>John </td>
//             <td>Doe </td>
//             <td>25 </td>
//             <td>USA </td>
//             <td>Male </td>

//         </tr>
//         <tr>
//             <td>steve </td>
//             <td>Doe </td>
//             <td>28 </td>
//             <td>USA </td>
//             <td>Male </td>

//         </tr>
//         <tr>
//             <td>simo </td>
//             <td>Doe </td>
//             <td>26 </td>
//             <td>USA </td>
//             <td>Male </td>

//         </tr>
//         <tr>
//             <td>karim </td>
//             <td>Doe </td>
//             <td>21 </td>
//             <td>USA </td>
//             <td>Male </td>

//         </tr>
//         <tr>
//             <td>adam </td>
//             <td>Doe </td>
//             <td>20 </td>
//             <td>USA </td>
//             <td>Male </td>

//         </tr>
//         <tr>
//             <td>keven </td>
//             <td>Doe </td>
//             <td>20 </td>
//             <td>USA </td>
//             <td>Male </td>

//         </tr>

//     </table>
//     <hr style={{marginTop:"35%"}}/>
//     </div>
//   );
// }

// export default Hobbies;