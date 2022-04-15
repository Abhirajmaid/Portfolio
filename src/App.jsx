import React, { useState, useEffect } from "react";
import NormalizeStyle from "./Global/normalizeStyle";
import { Contact, Home, Loader } from "./pages";
import "./Global/ScrollBar.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const App = () => {
  const location = useLocation();
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 2500);
  }, []);
  return (
    <>
      <NormalizeStyle />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={loading ? <Loader /> : <Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
