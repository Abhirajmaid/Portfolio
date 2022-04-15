import React from "react";
// import NavLink from "react-router-dom";
import "./style.css";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <>
      <motion.nav
        className="nav"
        initial={{ y: -400 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          ease: "easeInOut",
          delay: 0.8,
        }}
      >
        <div className="main-menue">
          <ul>
            <li>
              <a href="#home"> Home </a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#connect">Connect</a>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default Nav;
