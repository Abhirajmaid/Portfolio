import React from "react";
import { SkillsCard } from "../../components/SkillsCard/SkillsCard";
import { Logo } from "../../components/Logo/Logo";
import { ContactLink } from "../../components/ContactLink/ContactLink";
import { SocialIcons } from "../../components/SocialIcons/SocialIcons";
import { SkillsData } from "../../data/SkillsData";
import { BigTitle } from "../../components/BigTitle/BigTitle";
import { BgParticles } from "../../components/Particles/Particles";
import "./style.css";

export const Skills = () => {
  const SkillCard = SkillsData.map((card) => {
    return <SkillsCard key={card.id} card={card} />;
  });
  return (
    <>
      <div className="container" style={{ minHeight: "100vh", height: "100%" }}>
        <div className="skills-container">
          <BgParticles theme="light" />
          <Logo color="white" />
          <ContactLink />
          <SocialIcons color="white" />
          <BigTitle
            text="SKILLS"
            bottom="0"
            right="10%"
            color="rgba(255, 255, 255, 0.1)"
          />
          <section>
            <div className="skills-grid">{SkillCard}</div>
          </section>
        </div>
      </div>
    </>
  );
};
