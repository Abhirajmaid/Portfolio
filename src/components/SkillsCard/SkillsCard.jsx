import React from "react";
import "./style.css";
import { Icon } from "@iconify/react";

export const SkillsCard = (prop) => {
  const { icon, title, discription, skills, tools } = prop.card;
  const Skills = skills.map((s, id) => <span key={id}>{`#${s}, `}</span>);
  const Tools = tools.map((t) => <span>{`#${t}, `}</span>);

  const style = {
    color: "white",
    marginRight: "15px",
  };
  return (
    <>
      <div className="skills-card">
        <div className="card-title">
          <Icon icon={`${icon}`} style={style} />
          <h2>{title}</h2>
        </div>
        <p className="skills-dis">{discription}</p>
        <h3 className="skills-title">SKILLS</h3>
        <div className="skills">{Skills}</div>
        <h3 className="tools-title">TOOLS</h3>
        <div className="tools">{Tools}</div>
      </div>
    </>
  );
};
