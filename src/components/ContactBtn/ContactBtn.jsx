import React from "react";
import { motion } from "framer-motion";
import "./style.css";
import { NavLink } from "react-router-dom";

const TextVarient = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      delay: 1.8,
    },
  },
};

const ContactBtn = () => {
  return (
    <motion.div
      className="contact-btn"
      initial={{ rotate: 360, opacity: 0 }}
      animate={{ rotate: 45, opacity: 1 }}
      transition={{
        duration: 1,
        type: "spring",
        ease: "easeIn",
        delay: 1.4,
      }}
    >
      <h3>
        <NavLink to="/contact">
          <motion.div
            variants={TextVarient}
            initial="initial"
            animate="animate"
          >
            <span>Contact </span>
            <span>Me</span>
          </motion.div>
        </NavLink>
      </h3>
    </motion.div>
  );
};

export default ContactBtn;
