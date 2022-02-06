import React from "react";
import "./style.css";
import { motion } from "framer-motion";

export const Nav = (prop) => {
  return (
    <a
      href={`/${prop.pagename}`}
      className="nav-link"
      style={{ color: prop.color }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {prop.pagename}
      </motion.h2>
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
