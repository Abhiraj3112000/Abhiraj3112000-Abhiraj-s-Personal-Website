import React from 'react';
import '../../App.css';
import './Hobbies.css';
import Navbar from '../Navbar';

function Hobbies() {
  return (
    <div className="page">
      <Navbar/>
        <h1>Hobbies Page</h1>
        <hr/>
    <table>
        <tr id="header">
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Gender</th>
        </tr>
        <tr>
            <td>John </td>
            <td>Doe </td>
            <td>25 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>steve </td>
            <td>Doe </td>
            <td>28 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>simo </td>
            <td>Doe </td>
            <td>26 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>karim </td>
            <td>Doe </td>
            <td>21 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>adam </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>
        <tr>
            <td>keven </td>
            <td>Doe </td>
            <td>20 </td>
            <td>USA </td>
            <td>Male </td>

        </tr>

    </table>
    <hr style={{marginTop:"35%"}}/>
    </div>
  );
}

export default Hobbies;