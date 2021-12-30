import React, { useEffect } from "react";
import "../../App.css";
import "./Academics.css";
import Aos from "aos";
import Navbar from "../Navbar";

function Academics() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <table>
          <tr id="header">
            <th width="20%">First name</th>
            <th width="80%">Last name</th>
          </tr>
          <tr>
            <td>John </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>steve </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>simo </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>karim </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>adam </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>keven </td>
            <td>Doe </td>
          </tr>
        </table>

        <table>
          <tr id="header">
            <th width="20%">First name</th>
            <th width="80%">Last name</th>
          </tr>
          <tr>
            <td>John </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>steve </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>simo </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>karim </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>adam </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>keven </td>
            <td>Doe </td>
          </tr>
        </table>

        <table>
          <tr id="header">
            <th width="20%">First name</th>
            <th width="80%">Last name</th>
          </tr>
          <tr>
            <td>John </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>steve </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>simo </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>karim </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>adam </td>
            <td>Doe </td>
          </tr>
          <tr>
            <td>keven </td>
            <td>Doe </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Academics;
