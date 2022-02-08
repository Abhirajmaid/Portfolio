import React from "react";
import "./style.css";

export const Logo = (prop) => {
  return (
    <>
      <h1 className="logo">
        <a className="logo-link" style={{ color: prop.color }} href="/">
          AB
        </a>
      </h1>
    </>
  );
};
