import React from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { Main } from "./pages/Main/Main";
// import { About } from "./pages/About/About";
import GlobalStyle from "./Global/globalstyles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
export const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
};
