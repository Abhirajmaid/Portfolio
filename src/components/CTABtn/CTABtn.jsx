import React from "react";
import "./style.css";

import { motion } from "framer-motion";

const CTABtn = (props) => {
  const style = {
    width: `${props.width}`,
    backgroundColor: "white",
    border: "none",
    padding: `${props.padding}`,
    fontSize: "clamp(12px, 4px + 3vw, 18px)",
    cursor: "pointer",
    textDecoration: "none",
  };
  return (
    <>
      <a href={props.link} target="_blank" rel="noreferrer">
        <motion.button
          style={style}
          className="cta-btn"
          whileTap={{ scale: 0.9 }}
        >
          {props.text}
        </motion.button>
      </a>
    </>
  );
};

export default CTABtn;
