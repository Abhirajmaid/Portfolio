import React from "react";
import "./style.css";

const CTABtn = (props) => {
  const style = {
    width: `${props.width}`,
    backgroundColor: "white",
    border: "none",
    padding: `${props.padding}`,
    fontSize: "18px",
    cursor: "pointer",
    textDecoration: "none",
  };
  return (
    <>
      <a href={props.link}>
        <button style={style} className="cta-btn">
          {props.text}
        </button>
      </a>
    </>
  );
};

export default CTABtn;
