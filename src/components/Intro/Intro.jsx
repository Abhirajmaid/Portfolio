import React from "react";
import "./style.css";
import { IntroInfo } from "../../data/Info";

export const Intro = () => {
  const ImgURL = "https://bit.ly/3op5UwH";
  return (
    <>
      <div className="box">
        <div className="sub-box">
          <div className="h1">I'm Abhiraj</div>
          <div style={{ color: "#363636", fontSize: "16px" }}>
            <IntroInfo />
          </div>
          <button className="resume-btn">My Resume</button>
        </div>
        <div className="sub-box">
          <img src={ImgURL} alt="abhiraj" className="pic" />
        </div>
      </div>
    </>
  );
};
