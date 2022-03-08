import React from "react";
// import NavLink from "react-router-dom";
import "./style.css";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="main-menue">
          <ul>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/Work">Work</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Skills">Skills</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
