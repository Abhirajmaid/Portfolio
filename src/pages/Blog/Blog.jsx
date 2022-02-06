import React, { useState, useEffect } from "react";
import { SocialIcons } from "../../components/SocialIcons/SocialIcons";
import { Logo } from "../../components/Logo/Logo";
import { Blogs } from "../../data/BlogData";
import { BlogCard } from "../../components/BlogCard/BlogCard";
import ScrollAnchore from "../../components/ScrollAnchor/ScrollAnchor";
import { BigTitle } from "../../components/BigTitle/BigTitle";
import "./style.css";

export const Blog = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  const style = {
    minHeight: "100vh",
    height: "100%",
    paddingBottom: "130px",
  };

  const Blog = Blogs.map((blog) => {
    return <BlogCard key={blog.id} blog={blog} />;
  });

  return (
    <>
      <div className="container" style={style}>
        <div className="blog-container">
          <Logo color="white" />
          <SocialIcons color="white" />
          <ScrollAnchore number={numbers} />
          <section className="blog-sec">
            <div className="grid">{Blog}</div>
          </section>
          <BigTitle
            text="BLOG"
            top="5rem"
            left="5rem"
            color="rgba(255, 255, 255, 0.26)"
          />
        </div>
      </div>
    </>
  );
};
