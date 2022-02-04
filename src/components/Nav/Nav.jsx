import React from "react";
import "./style.css";

export const Nav = (prop) => {
  return (
    <a
      href={`/${prop.pagename}`}
      className="nav-link"
      style={{ color: prop.color }}
    >
      <h2>{prop.pagename}</h2>
    </a>
  );
};

/**
 * !import { NavLink } from "react-router-dom";
 * ?Is not working here. So 'a' tag is used
 *
 * #<NavLink className="nav-link" to={{ pathname: `/${prop.pagename}` }}>
 * #   <h2>{prop.pagename}</h2>
 * #</NavLink>
 *
 */
