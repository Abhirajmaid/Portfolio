import React from "react";
import "./style.css";
import BackgroundAnimation from "../../components/BgAnimation/BgAnimation";

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="home-container">
          <section style={{ marginTop: "120px" }}>
            <div className="hello-contain">
              <span>H</span>
              <span>E</span>
              <span>L</span>
              <span>L</span>
              <span>O</span>
            </div>
            <BackgroundAnimation />
          </section>
        </div>
      </div>
    </>
  );
};
