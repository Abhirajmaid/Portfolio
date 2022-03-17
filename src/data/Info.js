import React from "react";

export const IntroInfo = () => {
  return (
    <>
      <p>
        Myself Abhiraj Maid and I'm in freshman year of my college pursuing IT
        engineering degree. Also 3* coder at CodeChef. Two things I can't live
        without Coffee and Coding <br />
        "I write code, love code, live code."
      </p>
    </>
  );
};
export const AboutInfo = () => {
  const style = {
    textDecoration: "underline",
    fontWeight: "800",
    color: "rgb(255, 245, 232)",
  };
  return (
    <>
      <p>
        I'm Programming enthusiast and fullstack Web developer. And I love
        Web-dev.
        <br />
        <br />I Work with JavaScript, React, Next.js and lot other technologies.
        I love using and working with new technologies. You can check my skills
        section above.
        {/* checkout my{" "}
        <a href="/Skills" target="_blank" style={style}>
          Skills Page
        </a> */}
        <br />
        <br />
        I'm right now pursuing my BTech (Engineering) degree in IT branch and
        honestly engineering is fun 😅.
        <br />I also run NEWS media company{" "}
        <a
          href="https://www.eternalmac.com"
          target="_blank"
          style={style}
          rel="noreferrer"
        >
          Eternalmac.com
        </a>{" "}
        Where we post all tech news for techies.
        <br />
        <br />I love exploring different of fields and I do 3d-designing and
        animations in Blender. And I have few good{" "}
        <a
          href="https://www.artstation.com/codersground404"
          target="_blank"
          style={style}
          rel="noreferrer"
        >
          projects on Artstation
        </a>{" "}
        too. Definitely check those out.
        <br />
        <br />
        At last, Feel free to{" "}
        <a href="/contact" style={style}>
          Contact ME
        </a>{" "}
        Wherever you can😁, We can listen to good POP music together 🎧
      </p>
    </>
  );
};
