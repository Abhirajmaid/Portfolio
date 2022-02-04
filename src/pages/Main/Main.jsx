import React from "react";
import { SocialIcons } from "../../components/SocialIcons/SocialIcons";
import { Nav } from "../../components/Nav/Nav";
import { Intro } from "../../components/Intro/Intro";
import "./style.css";

export const Main = () => {
  return (
    <>
      <div className="container">
        <div className="main-container">
          <SocialIcons color="black" />
          <div className="blog">
            <Nav pagename="Blog" color="white" />
          </div>
          <div className="work">
            <Nav pagename="Work" color="black" />
          </div>
          <div className="BottomNav">
            <div>
              <Nav pagename="About" color="black" />
            </div>
            <div>
              <Nav pagename="Skills" color="white" />
            </div>
          </div>
        </div>
        <Intro />
      </div>
      <div className="lightdiv" color="black"></div>
    </>
  );
};
