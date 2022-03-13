import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./style.css";

// const useMousePosition = () => {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);
//   return position;
// };

const WorkCard = (prop) => {
  const { name, description, img, tags, demo, github, side } = prop.work;

  const [hover, setHover] = useState(false);
  //   const { x, y } = useMousePosition();
  //   console.log(x, y);
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
          style={{ width: "50%", display: "flex", justifyContent: "center" }}
        >
          <div
            className="work-card"
            onMouseOver={() => mouseOver()}
            onMouseLeave={() => mouseLeave()}
          >
            <h1 className="work-title">{name}</h1>
            <div className="tags">{Tags}</div>
            <div className="links">
              <a
                href={demo}
                className="visit-btn"
                target="_blank"
                rel="noreferrer"
              >
                Visit
              </a>

              <a href={github} target="_blank" rel="noreferrer">
                <Icon icon="bi:github" style={style} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
