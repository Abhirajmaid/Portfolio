import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./style.css";

const Socials = ({ text, dimenssion, fontSize }) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <li
        className="one-social-wrap"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover()}
      >
        <Icon
          icon={`arcticons:${text}`}
          style={{
            width: dimenssion,
            height: dimenssion,
            transform: hover ? "rotate(-10deg)" : "",
          }}
        />
        <a href="/" className="socials-name">
          <p style={{ fontSize: fontSize }}>{text}</p>
        </a>
      </li>
    </>
  );
};

const SocialConnect = (prop) => {
  return (
    <>
      <ul className="socials-wrap">
        <Socials text="instagram" dimenssion={prop.dim} fontSize={prop.size} />
        <Socials text="linkedin" dimenssion={prop.dim} fontSize={prop.size} />
        <Socials text="github" dimenssion={prop.dim} fontSize={prop.size} />
      </ul>
    </>
  );
};

export default SocialConnect;
