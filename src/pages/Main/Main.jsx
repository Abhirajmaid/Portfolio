import React from "react";
import { SocialIcons } from "../../components/SocialIcons/SocialIcons";
import { Nav } from "../../components/Nav/Nav";
// import styled from "styled-components";
import "./style.css";

export const Main = () => {
  return (
    <>
      <div className="container">
        <div className="main-container">
          <SocialIcons />
          <div className="blog">
            <Nav pagename="Blog" />
          </div>
          <div className="work">
            <Nav pagename="Work" />
          </div>
          <div className="BottomNav">
            <div>
              <Nav pagename="Skills" />
            </div>
            <div>
              <Nav pagename="About" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
