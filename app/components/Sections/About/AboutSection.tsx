import Section from "../Section";
import data from "../../../portfolio";

const AboutSection = () => {
  return (
    <>
      <Section
        id="about"
        title="About"
        content={
          <div className="text-xl">
            {data.about.paragraphs.map((text, i) => <Paragraph key={i} text={text} />)}
          </div>
        }
      />
    </>
  );
};

const Paragraph = ({ text }: { text: string }) => {
  const parts = text.split(/(\*[^*]+\*)/);

  return (
    <p>
      {parts.map((part, index) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          const content = part.slice(1, -1); // remove the asterisks
          return <mark key={index}>{content}</mark>;
        } else {
          return <span key={index}>{part}</span>;
        }
      })}
    </p>
  );
}

export default AboutSection;
