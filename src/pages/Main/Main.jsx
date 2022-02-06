import React from "react";
import { SocialIcons } from "../../components/SocialIcons/SocialIcons";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { Intro } from "../../components/Intro/Intro";
import { ContactLink } from "../../components/ContactLink/ContactLink";
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
          <ContactLink />
          <Logo color="black" />
        </div>
        <Intro />
      </div>
      <div className="lightdiv" color="black"></div>
    </>
  );
};
