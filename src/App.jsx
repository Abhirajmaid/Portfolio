import React, { useState, useEffect } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { Main } from "./pages/Main/Main";
import { Blog } from "./pages/Blog/Blog";
import { Skills } from "./pages/Skills/Skills";
import { About } from "./pages/About/About";
import GlobalStyle from "./Global/globalstyles";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Work } from "./pages/Work/Work";
import { AnimatePresence } from "framer-motion";

export const App = () => {
  const [loading, setLoding] = useState(false);
  useEffect(() => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 2000);
  }, []);

  return (
    <>
      <GlobalStyle />
      {loading ? (
        <HomePage />
      ) : (
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/Blog" element={<Blog />} />
            <Route exact path="/Skills" element={<Skills />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Work" element={<Work />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

// Hello guys!!!!
