import React, { useState } from "react";
import "./style.css";
import { Icon } from "@iconify/react";
// import { NavLink } from "react-router-dom";

export const SocialIcons = () => {
  //   const [isHovered, setIsHovered] = useState();
  //   const handleMouseEnter = () => {
  //     this.setState({ isHovered: true });
  //   };
  return (
    <>
      <div className="icons">
        <a href="/home" target="_blank">
          <Icon
            icon="bi:twitter"
            style={{ height: "25px", width: "25px", color: "white" }}
          />
        </a>
        <a
          href="https://github.com/Abhirajmaid"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon="bi:github"
            style={{
              height: "25px",
              width: "25px",
              color: "white",
              //   color={isHovered ? ,"#333" : '#fff'},
            }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/abhiraj-maid-42a381217/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon="bi:linkedin"
            style={{ height: "25px", width: "25px", color: "white" }}
          />
        </a>
        {/* <NavLink
          target="_blank"
          to={{
            pathname: "https://www.linkedin.com/in/abhiraj-maid-42a381217/",
          }}
        >
          <Icon
            icon="bi:linkedin"
            style={{ height: "25px", width: "25px", color: "white" }}
          />
        </NavLink> */}
        <span className="line"></span>
      </div>
    </>
  );
};
