import React from "react";

import "./style.css";

import {
  ContactBtn,
  PageHeader,
  SkillsIntro,
  CTABtn,
  Intro,
  Nav,
  SectionTitle,
} from "../../components";

const Home = () => {
  return (
    <>
      <div className="page">
        <div className="head-wrap">
          <Nav />
          <div className="head">
            <PageHeader />
            <SkillsIntro />
          </div>
        </div>
        <div className="container">
          <section className="intro">
            <ContactBtn />
            <Intro />
            <div className="resume-btn-wrap">
              <CTABtn
                text="Resume"
                link="Resume"
                padding="10px"
                width="200px"
              />
            </div>
          </section>
          <section className="work">
            <SectionTitle title="Selected Works" />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
