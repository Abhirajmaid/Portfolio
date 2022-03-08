import React from "react";

import Marquee from "./Marquee/Marquee";
import { Icon } from "@iconify/react";
const SkillsIntro = () => {
  return (
    <>
      <div className="skill-intro">
        <Icon icon="carbon:arrow-down-right" className="arrow" />
        <div>
          <Marquee text="Web-Development" />
          <Marquee text="Competetive Programming" />
          <Marquee text="UI/UX Designer" />
        </div>
        {/* <div className="skill-box">
          <p>Web-Development</p>
          <p>Competetive Programming</p>
          <p>UI/UX Designer</p>
        </div> */}
      </div>
    </>
  );
};

export default SkillsIntro;
