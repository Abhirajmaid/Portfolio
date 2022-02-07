import React from "react";
import "./style.css";

export const ActionBtn = (prop) => {
  return (
    <>
      <a href={prop.link} target="_blank" rel="noreferrer">
        <button className="btn">{prop.text}</button>
      </a>
    </>
  );
};
