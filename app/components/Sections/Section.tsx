import React from "react";

interface SectionParams {
  id?: string;
  title: string;
  content: JSX.Element;
}

const Section = ({ id, title, content }: SectionParams) => {
  return (
    <>
      <div className="py-12 flex flex-col text-deep-midnight" id={id}>
        <div className="p-2 text-4xl font-bold">{title}</div>
        <div className="py-4 px-4 text-xl leading-8 md:px-10 lg:px-16">
          {content}
        </div>
      </div>
    </>
  );
};

export default Section;
