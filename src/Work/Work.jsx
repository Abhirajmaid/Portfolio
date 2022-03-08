import React, { useEffect, useRef } from "react";
import { SocialIcons } from "../components/SocialIcons/SocialIcons";
import { Logo } from "../components/Logo/Logo";
import { WorkData } from "../data/WorkData";
import { WorkCard } from "../components/WorkCard/WorkCard";
import { BigTitle } from "../components/BigTitle/BigTitle";
import { ContactLink } from "../components/ContactLink/ContactLink";
import "./style.css";

export const Work = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () =>
      (element.style.transform = `translateX(${-window.pageYOffset}px)`);

    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  const Card = WorkData.map((work) => {
    return <WorkCard key={work.id} work={work} />;
  });

  const style = {
    backgroundColor: "black",
    height: "400vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
  };
  return (
    <>
      <div className="container" style={style}>
        <div className="work-container">
          <SocialIcons color="white" />
          <Logo color="white" />
          <BigTitle
            text="WORK"
            top="12%"
            right="18%"
            color="rgba(255, 255, 255, 0.1)"
            style={{ position: "fixed" }}
          />
          <ContactLink />
          <div ref={ref} className="work-grid">
            {Card}
          </div>
        </div>
      </div>
    </>
  );
};
