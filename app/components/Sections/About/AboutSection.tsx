import React from "react";
import Section from "../Section";

const AboutSection = () => {
  return (
    <>
      <Section
        id="about"
        title="About"
        content={
          <div className="text-xl">
            I&apos;m a <mark>Java Developer</mark> focusing on backend development using Java 
            frameworks including <mark>Spring Core</mark>, <mark>Spring Web MVC</mark>
            , <mark>Spring Data</mark>, <mark>Spring Boot</mark>, <mark>Spring Security</mark>
            , and <mark>Hibernate</mark>. I&apos;m confident in working with SQL databases, 
            particularly with <mark>MySQL</mark>. Capable of basic tasks in <mark>JavaFX </mark>
             for desktop applications and possesses entry-level proficiency in frontend technologies 
             like <mark>HTML</mark>, <mark>CSS</mark>, <mark>Tailwind CSS</mark>, <mark>JavaScript</mark>
             , <mark>ReactJs</mark>, and <mark>NextJs</mark>. Proficient in utilizing <mark>Maven </mark> 
             and <mark>Git</mark> for project management and version control.
          </div>
        }
      />
    </>
  );
};

export default AboutSection;
