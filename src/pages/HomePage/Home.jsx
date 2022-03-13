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
  SocialConnect,
  ContactEmail,
  FooterNav,
  SkillsBox,
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
                link="https://drive.google.com/file/d/1_cAMkys07aDdbtoDAwwCRVtqqoJzfbbe/view?usp=sharing"
                padding="10px"
                width="200px"
              />
            </div>
          </section>
          <section className="work">
            <SectionTitle title="Selected Works :" />
            <div className="projects-wrap">{WCard}</div>
          </section>
          <section className="skills">
            <article>
              <SectionTitle title="My_ Skills" />
            </article>
            <SkillsBox />
          </section>
          <section className="about">
            <SectionTitle title="About Me and Myself :" />
            <div>
              <AboutText />
              <SocialConnect dim="45px" />
            </div>
          </section>
          <section className="contact">
            <article style={{ width: "50%" }}>
              <SectionTitle title="Let's Have a Talk !" fontSize="80px" />
            </article>
            <ContactEmail />
            <footer>
              <SocialConnect dim="25px" size="15px" />
              <div className="footer-content">
                <FooterNav />
              </div>
            </footer>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
