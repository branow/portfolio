import React from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import memo from "./../../public/projects/memo-title.png";
import eco from "./../../public/projects/eco-title.png";
import lcards from "./../../public/projects/lcards-title.png";

const ProjectsSection = () => {
  return (
    <>
      <Section
        title="Portfolio"
        content={
          <div className="flex flex-row gap-4 flex-wrap justify-center">
            <ProjectCard
              title="Memo"
              description="'Memo' is a website designed for quick and efficient vocabulary memorization through the use of flashcard techniques."
              image={memo}
              href="/projects/memo"
            />
            <ProjectCard
              title="Environmental Monitoring of Enterprises"
              description="The 'Environmental Monitoring of Enterprises' website as a comprehensive platform for processing indicators related to air emission"
              image={eco}
              href="/projects/eco"
            />
            <ProjectCard
              title="LCards"
              description="'LCards' is a desktop application designed for the rapid and effective memorization of English vocabulary using flashcard techniques."
              image={lcards}
              href="/projects/lcards"
            />
          </div>
        }
      />
    </>
  );
};

export default ProjectsSection;
