import React from "react";
import { IntroInfo } from "../../data/Info";
import { ActionBtn } from "../ActionBtn/ActionBtn";
import "./style.css";

export const Intro = () => {
  const ImgURL =
    "https://github.com/Abhirajmaid/Portfolio/blob/master/public/assets/Images/Hand.png?raw=true";
  return (
    <>
      <div className="box">
        <div className="sub-box">
          <div className="h1">I'm Abhiraj</div>
          <div style={{ color: "#363636", fontSize: "16px" }}>
            <IntroInfo />
          </div>
          <ActionBtn text="My Resume" />
        </div>
        <div className="sub-box">
          <img src={ImgURL} alt="abhiraj" className="pic" />
        </div>
      </div>
    </>
  );
};
