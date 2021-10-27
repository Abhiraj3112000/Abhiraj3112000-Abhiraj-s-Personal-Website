import React from "react";
import "../../App.css";
import "./Tools.css";
import { toolsInfo } from "./Functions";
import Navbar from "../Navbar";

function Tools() {
  return (
    <div className="tools-page">
      <Navbar />

      <div className="tools-container">
        <div
          style={{
            fontSize: "40px",
            color: "#baf5c7",
            marginLeft: "20px",
            marginTop: "2rem",
          }}
        >
          Languages
        </div>
        {toolsInfo.map((oneInfo, index) => {
          return oneInfo.use === "lang" ? (
            <img
              className="tool"
              key={index}
              src={oneInfo.img}
              alt={oneInfo.title}
              title={oneInfo.title}
            />
          ) : (
            ""
          );
        })}

        <div
          style={{
            fontSize: "40px",
            color: "#f5d3ba",
            marginLeft: "20px",
            marginTop: "2rem"
          }}
        >
          Web Front End
        </div>
        {toolsInfo.map((oneInfo, index) => {
          return oneInfo.use === "front" ? (
            <img
              className="tool"
              key={index}
              src={oneInfo.img}
              alt={oneInfo.title}
              title={oneInfo.title}
            />
          ) : (
            ""
          );
        })}

        <div
          style={{
            fontSize: "40px",
            color: "#f5baf2",
            marginLeft: "20px",
            marginTop: "2rem",
          }}
        >
          Web Back End
        </div>
        {toolsInfo.map((oneInfo, index) => {
          return oneInfo.use === "back" ? (
            <img
              className="tool"
              style={{background:"#bae5e6",borderRadius: "50%",padding: "0.2rem" }}
              key={index}
              src={oneInfo.img}
              alt={oneInfo.title}
              title={oneInfo.title}
            />
          ) : (
            ""
          );
        })}

<div
          style={{
            fontSize: "40px",
            color: "#d6baf5",
            marginLeft: "20px",
            marginTop: "2rem",
          }}
        >
          Android
        </div>
        {toolsInfo.map((oneInfo, index) => {
          return oneInfo.use === "android" ? (
            <img
              className="tool"
              style={{ height: "150px", width: "150px" }}
              key={index}
              src={oneInfo.img}
              alt={oneInfo.title}
              title={oneInfo.title}
            />
          ) : (
            ""
          );
        })}


        <div
          style={{
            fontSize: "40px",
            color: "#baeff5",
            marginLeft: "20px",
            marginTop: "2rem",
          }}
        >
          Machine Learning
        </div>
        {toolsInfo.map((oneInfo, index) => {
          return oneInfo.use === "ml" ? (
            <img
              className="tool"
              style={{ width: "150px", background:"#e3e1e1",borderRadius:"10px"}}
              key={index}
              src={oneInfo.img}
              alt={oneInfo.title}
              title={oneInfo.title}
            />
          ) : (
            ""
          );
        })}


<div
          style={{
            fontSize: "40px",
            color: "#f7b0b0",
            marginLeft: "20px",
            // marginTop: "2rem",
          }}
        >
          Hosting
        </div>

        {toolsInfo.map((oneInfo, index) => {
          return oneInfo.use === "hosting" && oneInfo.title !== "Heroku" ? (
            <img
              className="tool"
              key={index}
              src={oneInfo.img}
              alt={oneInfo.title}
              title={oneInfo.title}
            />
          ) : oneInfo.use === "hosting" ? (
            <img
              className="tool"
              style={{ padding: "5px" }}
              key={index}
              src={oneInfo.img}
              alt={oneInfo.title}
              title={oneInfo.title}
            />
          ) : (
            ""
          );
        })}

        <div
          style={{
            fontSize: "40px",
            color: "#baeef5",
            marginLeft: "20px",
            marginTop: "2rem",
          }}
        >
          Version Control
        </div>
        {toolsInfo.map((oneInfo, index) => {
          return oneInfo.use === "vc" ? (
            <img
              className="tool"
              style={{ borderRadius: "50%" }}
              key={index}
              src={oneInfo.img}
              alt={oneInfo.title}
              title={oneInfo.title}
            />
          ) : (
            ""
          );
        })}


        <div
          style={{
            fontSize: "40px",
            color: "#bcbaf5",
            marginLeft: "20px",
            marginTop: "2rem",
          }}
        >
          Editor
        </div>
        {toolsInfo.map((oneInfo, index) => {
          return oneInfo.use === "editor" ? (
            <img
              className="tool"
              style={{}}
              key={index}
              src={oneInfo.img}
              alt={oneInfo.title}
              title={oneInfo.title}
            />
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}

export default Tools;
