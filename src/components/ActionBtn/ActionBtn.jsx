import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export const ActionBtn = (prop) => {
  return (
    <>
      <NavLink to={`${prop.link}`}>
        <button className="btn">{prop.text}</button>
      </NavLink>
    </>
  );
};
