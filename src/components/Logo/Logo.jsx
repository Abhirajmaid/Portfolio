import React from "react";
import "./style.css";

export const Logo = (prop) => {
  return (
    <>
      <div className="logo" style={{ color: prop.color }}>
        AB
      </div>
    </>
  );
};
