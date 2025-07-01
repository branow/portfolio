import React from "react";
import Section from "../Section";
import Timeline from "../Education/Timeline";
import data from "@/app/portfolio";

const ExperienceSection = () => {
  return (
    <>
      <Section
        id="experience"
        title="Experience"
        content={
          <div>
            <Timeline events={data.experience} />
          </div>
        }
      />
    </>
  );
};

export default ExperienceSection;
