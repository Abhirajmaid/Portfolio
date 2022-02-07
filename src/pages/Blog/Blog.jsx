import React, { useState, useEffect } from "react";
import { SocialIcons } from "../../components/SocialIcons/SocialIcons";
import { Logo } from "../../components/Logo/Logo";
import { Blogs } from "../../data/BlogData";
import { BlogCard } from "../../components/BlogCard/BlogCard";
import ScrollAnchore from "../../components/ScrollAnchor/ScrollAnchor";
import { BigTitle } from "../../components/BigTitle/BigTitle";
import "./style.css";
import { Opacity } from "tsparticles/Options/Classes/Particles/Opacity/Opacity";

export const Blog = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  const URL =
    "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const style = {
    backgroundImage: `url(${URL})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
  };

  const Blog = Blogs.map((blog) => {
    return <BlogCard key={blog.id} blog={blog} />;
  });

  return (
    <>
      <div style={style}>
        <div
          className="container"
          style={{
            minHeight: "100vh",
            height: "100%",
            opacity: "0.95",
            paddingBottom: "130px",
          }}
        >
          <div className="blog-container">
            <Logo color="white" />
            <SocialIcons color="white" />
            <ScrollAnchore number={numbers} />
            <section className="blog-sec">
              <div className="grid">{Blog}</div>
            </section>
            <BigTitle
              text="BLOG"
              top="4rem"
              left="5rem"
              color="rgba(255, 255, 255, 0.1)"
            />
          </div>
        </div>
      </div>
    </>
  );
};
