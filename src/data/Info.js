import React from "react";

export const IntroInfo = () => {
  return (
    <>
      <p>
        Programming enthusiast. A Web-Developer. Currently learning Blockchain
        technology . I enjoy doing UI/UX and designing in general.
      </p>
    </>
  );
};
export const AboutInfo = () => {
  const style = {
    textDecoration: "none",
    color: "aqua",
  };
  return (
    <>
      <p>
        I'm Programming enthusiast. Who loves Web-Development and I'm
        Web-Developer myself.
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
        <br />
        Currently learning Blockchain, web3 technologies😍. <br /> I also do 3d
        designing and animations with Blender for fun. I have few good{" "}
        <a
          href="https://www.artstation.com/codersground404"
          target="_blank"
          style={style}
          rel="noreferrer"
        >
          projects
        </a>
        too.
        <br />
        <br />
        Feel free to{" "}
        <a href="/contact" style={style}>
          Contact ME{" "}
        </a>
        We can listen to some POP music 🎧🤗
      </p>
    </>
  );
};
