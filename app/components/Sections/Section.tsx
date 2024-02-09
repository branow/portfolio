import React from "react";

interface SectionParams {
  title: string;
  content: JSX.Element;
}

const Section = ({ title, content }: SectionParams) => {
  return (
    <>
      <div className="flex flex-col text-deep-midnight">
        <div className="p-2 text-4xl font-bold">{title}</div>
        <div className="py-4 px-4 text-xl leading-8 md:px-10 lg:px-16">
          {content}
        </div>
      </div>
    </>
  );
};

export default Section;
