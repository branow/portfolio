import Section from "../Section";

const AboutSection = () => {
  return (
    <>
      <Section
        id="about"
        title="About"
        content={
          <div className="text-xl">
            I have been programming for several years, during which I&apos;ve become familiar with
            various technologies. My strongest skill is backend development, particularly
            using <mark>Java</mark> and the <mark>Spring framework</mark> (including
            <mark> Spring Security</mark> and <mark>Spring OAuth</mark>). Through
            my personal projects, I&apos;ve also gained knowledge
            in frontend technologies like <mark>React</mark>, <mark>Next.js</mark> and <mark>Tailwind CSS</mark>.
            Additionally, I have experience working with databases and have knowledge of developer
            tools such as <mark>Git</mark> and <mark>Docker</mark>.
            <br/>
            <br/>
            Recently, I&apos;ve started exploring <mark>Golang</mark> and its related tools and frameworks.
          </div>
        }
      />
    </>
  );
};

export default AboutSection;
