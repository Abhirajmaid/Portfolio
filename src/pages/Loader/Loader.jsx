import React, { useState, useEffect } from "react";
import "./style.css";
import { motion } from "framer-motion";

const LoaderVariant = {
  initial: { left: "-100vw" },
  animate: {
    left: "0",
    transition: { duration: 2.3, type: "tween", ease: "linear" },
  },
};

const Loader = () => {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(true);

  useEffect(() => {
    let counter = setInterval(() => {
      setCount(count + 1);
      if (count === 100) {
        setCount(0);
        setTest(false);
      }
    }, 20);
    return () => clearInterval(counter);
  });
  return (
    <>
      <div className="loader-container">
        <div className="loader-wrap">
          <p>Let's Get Ready!</p>
          <motion.div
            className="loader-bar"
            variants={LoaderVariant}
            initial="initial"
            animate="animate"
          ></motion.div>
          <motion.div
            className="counter"
            variants={LoaderVariant}
            initial={{ left: 0 }}
            animate={{ left: "93%" }}
            transition={{ duration: 2.3, ease: "linear" }}
          >
            <h3>{test && count}%</h3>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Loader;
