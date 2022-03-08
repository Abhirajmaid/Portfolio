import React from "react";

import "./style.css";

const SectionTitle = (props) => {
  return (
    <>
      <div>
        <h1 className="section-title">{props.title}</h1>
      </div>
    </>
  );
};

export default SectionTitle;
