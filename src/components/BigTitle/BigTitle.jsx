import React from "react";

export const BigTitle = (prop) => {
  const style = {
    position: "absolute",
    top: prop.top,
    right: prop.right,
    bottom: prop.bottom,
    left: prop.left,
    fontSize: "calc(5rem + 5vw)",
    color: prop.color,
  };
  return (
    <>
      <h1 style={style}>{prop.text}</h1>
    </>
  );
};
