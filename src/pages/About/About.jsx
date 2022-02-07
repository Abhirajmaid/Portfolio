import React from "react";
import { SocialIcons } from "../../components/SocialIcons/SocialIcons";
import { Logo } from "../../components/Logo/Logo";
import { BigTitle } from "../../components/BigTitle/BigTitle";
import { AboutInfo } from "../../data/Info";
import { BgParticles } from "../../components/Particles/Particles";
import { ContactLink } from "../../components/ContactLink/ContactLink";
import { ActionBtn } from "../../components/ActionBtn/ActionBtn";
import "./style.css";

export const About = () => {
  const URL =
    "https://raw.githubusercontent.com/Abhirajmaid/Portfolio/master/public/assets/Images/spaceman.png";

  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: "black", height: "110vh" }}
      >
        <div className="about-container">
          <SocialIcons color="white" />
          <Logo color="white" />
          <BigTitle
            text="ABOUT"
            top="10%"
            left="5%"
            color="rgba(255, 255, 255, 0.1)"
          />
          <ContactLink />
          <BgParticles />
          <div className="about-sec">
            <div className="about-info">
              <AboutInfo />
              <ActionBtn text="My Resume" style={{ width: "20vw" }} />
              <ActionBtn
                text="Projects"
                link="/Work"
                style={{ width: "50%" }}
              />
            </div>
          </div>
          <div className="about-img">
            <img src={URL} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};
