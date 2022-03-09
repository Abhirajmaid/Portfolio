import React from "react";

export const IntroInfo = () => {
  return (
    <>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore
      </p>
    </>
  );
};
export const AboutInfo = () => {
  const style = {
    textDecoration: "none",
    fontWeight: "800",
    color: "white",
  };
  return (
    <>
      <p>
        I'm Programming enthusiast. Who loves Web-Development and I'm
        Web-Developer.
        <br />
        <br />
        Work with JavaScript, React, and lot other technologies. checkout my{" "}
        <a href="/Skills" target="_blank" style={style}>
          Skills Page
        </a>
        <br />
        <br /> I also Run NEWS media company{" "}
        <a
          href="https://www.eternalmac.com"
          target="_blank"
          style={style}
          rel="noreferrer"
        >
          Eternalmac.com{" "}
        </a>
        <br />
        <br />I also do 3d designing and animations with Blender for fun. And I
        have few good{" "}
        <a
          href="https://www.artstation.com/codersground404"
          target="_blank"
          style={style}
          rel="noreferrer"
        >
          projects{" "}
        </a>
        too.
        <br />
        <br />
        Feel free to{" "}
        <a href="/contact" style={style}>
          Contact ME{" "}
        </a>
        We can listen to good POP music together 🎧🤗
      </p>
    </>
  );
};
