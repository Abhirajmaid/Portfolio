import React from "react";
import "./style.css";
import { Icon } from "@iconify/react";

/**
 * @Add_Functionality
 * ?import { useState } from "react";
 * ?Add hover effect on svg icons with the help of useState
 *
 * !import {NavLink} from "react-router-dom"
 * ?Here "a" tag is used due to NavLink is breaking complete page for some reasons
 * Add NavLink tag with fixes
 * # <NavLink
 * # target="_blank"
 * # to={{
 * #    pathname: "https://www.linkedin.com/in/abhiraj-maid-42a381217/",
 * # }}>
 * # <Icon
 * #    icon="bi:linkedin"
 * #    style={style}
 * # />
 * # </NavLink>
 *
 *
 */

export const SocialIcons = (prop) => {
  const style = {
    height: "25px",
    width: "25px",
    color: prop.color,
  };

  return (
    <>
      <div className="icons">
        <a href="/home" target="_blank">
          <Icon icon="bi:twitter" style={style} />
        </a>
        <a
          href="https://github.com/Abhirajmaid"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="bi:github" style={style} />
        </a>
        <a
          href="https://www.linkedin.com/in/abhiraj-maid-42a381217/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="bi:linkedin" style={style} />
        </a>
        <span className="line" style={{ backgroundColor: prop.color }}></span>
      </div>
    </>
  );
};
