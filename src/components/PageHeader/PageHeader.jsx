import React from "react";

import { motion } from "framer-motion";
import "./style.css";

const ParentVariant = {
  initial: {
    x: 0,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TextVariant = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.2,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

const PageHeader = () => {
  return (
    <>
      <motion.div
        className="text-area"
        variants={ParentVariant}
        initial="initial"
        animate="animate"
      >
        <span>
          <motion.h1 variants={TextVariant}>
            Hello<em>.</em>
          </motion.h1>
        </span>
        <span>
          <motion.h1 variants={TextVariant}>I am Abhiraj</motion.h1>
        </span>
      </motion.div>
    </>
  );
};

export default PageHeader;
