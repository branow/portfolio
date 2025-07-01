import React from "react";
import Section from "../Section";
import ProjectCard from "./ProjectCard";
import data from "@/app/portfolio";

const ProjectsSection = () => {
  return (
    <>
      <Section
        id="portfolio"
        title="Portfolio"
        content={
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            {data.projects.map(project => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                href={project.href}
              />
            ))}
          </div>
        }
      />
    </>
  );
};

export default ProjectsSection;
