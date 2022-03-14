import React, { useState, useEffect } from "react";
import NormalizeStyle from "./Global/normalizeStyle";
import { Contact, Home, Loader } from "./pages";
import "./Global/ScrollBar.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const App = () => {
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 2500);
  }, []);
  return (
    <>
      <NormalizeStyle />
      {/* <Loader /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={loading ? <Loader /> : <Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
