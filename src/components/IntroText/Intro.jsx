import React from "react";

import "./style.css";
import { IntroInfo } from "../../data/Info";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.div
      className="intro-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <IntroInfo />
    </motion.div>
  );
};

export default Intro;
