import React from "react";
import Section from "./Section";

const AboutSection = () => {
  return (
    <>
      <Section
        title="About"
        content={
          <div>
            I am a Java Developer enthusiastic about transforming ideas into
            efficient software solutions. I've worked on various projects
            showcasing my backend development skills using <b>Spring Boot</b>,{" "}
            <b>Spring MVC</b>, and <b>JPA Hibernate</b>. Also, my focus includes
            creating visually appealing desktop applications with <b>JavaFX</b>{" "}
            and <b>FXML</b>. I'm venturing into the front-end world with{" "}
            <b>ReactJS</b>, <b>HTML</b>, and <b>CSS</b> (<b>Tailwind</b>).
          </div>
        }
      />
    </>
  );
};

export default AboutSection;
