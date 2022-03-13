import React, { useState, useEffect } from "react";
import NormalizeStyle from "./Global/normalizeStyle";
import { Home, Loader } from "./pages";
import "./Global/ScrollBar.css";

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
      {loading ? <Loader /> : <Home />}
      {/* <Loader /> */}
    </>
  );
};
