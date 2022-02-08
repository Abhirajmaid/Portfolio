import React from "react";
import { Icon } from "@iconify/react";
import "./style.css";
export const WorkCard = (prop) => {
  const { name, description, tags, demo, github } = prop.work;
  const Tags = tags.map((t, id) => {
    return <span key={id}>{`#${t} `}</span>;
  });
  const style = {
    width: "30px",
    height: "30px",
    color: "black",
  };
  return (
    <>
      <div className="work-card">
        <h1 className="work-title">{name}</h1>
        <p className="work-des">{description}</p>
        <div className="tags">{Tags}</div>
        <div className="links">
          <a href={demo} className="visit-btn" target="_blank" rel="noreferrer">
            Visit
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <Icon icon="bi:github" style={style} />
          </a>
        </div>
      </div>
    </>
  );
};
