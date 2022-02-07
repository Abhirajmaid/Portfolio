import React from "react";
import "./style.css";
// import { NavLink } from "react-router-dom";

export const BlogCard = (prop) => {
  const { name, tags, date, imgSrc, link } = prop.blog;
  const Tags = tags.map((t, id) => {
    return <span key={id}>{`#${t} `}</span>;
  });
  return (
    <>
      <a href={link} target="_blank" className="card" rel="noreferrer">
        <img src={`${imgSrc}`} alt="blogImage" className="blog-img" />
        <h3 className="blog-title">{name}</h3>
        <hr className="divider" />
        <div className="tags">{Tags}</div>
        <span className="blog-date">{date}</span>
      </a>
    </>
  );
};
