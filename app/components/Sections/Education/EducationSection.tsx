import React from "react";
import Section from "../Section";
import Timeline from "./Timeline";
import { education } from "@/public/education";

const EducationSection = () => {
  return (
    <>
      <Section
        id="education"
        title="Education"
        content={
          <div>
            <Timeline events={education} />
          </div>
        }
      />
    </>
  );
};

export default EducationSection;
