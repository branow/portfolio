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
            I am a Java Developer enthusiastic about transforming ideas into
            efficient software solutions. I've worked on various projects
            showcasing my backend development skills using <mark>Spring Boot</mark>,{" "}
            <mark>Spring MVC</mark>, and <mark>JPA Hibernate</mark>. Also, my focus includes
            creating visually appealing desktop applications with <mark>JavaFX</mark>{" "}
            and <mark>FXML</mark>. I'm venturing into the front-end world with{" "}
            <mark>ReactJS</mark>, <mark>HTML</mark>, and <mark>CSS</mark> (<mark>Tailwind</mark>).
          </div>
        }
      />
    </>
  );
};

export default AboutSection;
