import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import "./style.css";

const WorkCard = (prop) => {
  const { name, description, img, tags, demo, github, side } = prop.work;
  const [hover, setHover] = useState(false);
  const Tags = tags.map((t, id) => {
    return <span key={id}>{`#${t} `}</span>;
  });
  const style = {
    width: "30px",
    height: "30px",
    color: "black",
  };

  const mouseOver = () => setHover(true);
  const mouseLeave = () => setHover(false);
  const styleImg = {
    display: hover ? "block" : "none",
    opacity: "0.8",
  };

  return (
    <>
      <div className={`card-wrap${side ? " reversed" : ""}`}>
        <div className="work-des">
          <p className={`${hover ? " hide" : ""}`}>{description}</p>
          <div className="work-img" style={styleImg}>
            <img src={img} alt="projectImg" />
          </div>
        </div>
        <div
          className="width-card"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="work-card"
            onMouseOver={() => mouseOver()}
            onMouseLeave={() => mouseLeave()}
          >
            <h1 className="work-title">{name}</h1>
            <div className="tags">{Tags}</div>
            <div className="links">
              <motion.a
                href={demo}
                className="visit-btn"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 0.8 }}
              >
                <h3>Visit</h3>
              </motion.a>

              <motion.a
                href={github}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
              >
                <Icon icon="bi:github" style={style} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
