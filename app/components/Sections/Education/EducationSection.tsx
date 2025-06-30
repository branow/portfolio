import React from "react";
import Section from "../Section";
import Timeline from "./Timeline";
import data from "@/app/portfolio";

const EducationSection = () => {
  return (
    <>
      <Section
        id="education"
        title="Education"
        content={
          <div>
            <Timeline events={data.education} />
          </div>
        }
      />
    </>
  );
};

export default EducationSection;
