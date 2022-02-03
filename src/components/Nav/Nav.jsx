import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export const Nav = (prop) => {
  return (
    // <NavLink className="nav-link" to={{ pathname: `/${prop.pagename}` }}>
    //   <h2>{prop.pagename}</h2>
    // </NavLink>
    <a href={`/${prop.pagename}`} className="nav-link">
      <h2>{prop.pagename}</h2>
    </a>
  );
};
