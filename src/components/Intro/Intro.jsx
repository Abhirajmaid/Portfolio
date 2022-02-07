import React from "react";
import "./style.css";
import { IntroInfo } from "../../data/Info";
import { ActionBtn } from "../ActionBtn/ActionBtn";

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
          <ActionBtn text="My Resume" />
        </div>
        <div className="sub-box">
          <img src={ImgURL} alt="abhiraj" className="pic" />
        </div>
      </div>
    </>
  );
};
