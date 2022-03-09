import React from "react";

import "./style.css";

import { WorkData } from "../../data/WorkData";

import {
  ContactBtn,
  PageHeader,
  SkillsIntro,
  CTABtn,
  Intro,
  Nav,
  SectionTitle,
  WorkCard,
  AboutText,
} from "../../components";

const Home = () => {
  const WCard = WorkData.map((work) => {
    return <WorkCard key={work.id} work={work} />;
  });

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
            <SectionTitle title="Selected Works :" />
            <div className="projects-wrap">{WCard}</div>
          </section>
          <section className="about">
            <SectionTitle title="I, Me and Myself :" />
            <AboutText />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
