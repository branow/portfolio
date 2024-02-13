import Hero from "./components/Hero/Hero";
import AboutSection from "./components/Sections/About/AboutSection";
import SkillsSection from "./components/Sections/Skills/SkillsSection";
import LanguagesSection from "./components/Sections/Languages/LanguagesSection";
import ProjectsSection from "./components/Sections/Projects/ProjectsSection";
import EducationSection from "./components/Sections/Education/EducationSection";
import CertificatesSection from "./components/Sections/Certificates/CertificatesSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <Hero />
      <AboutSection />
      <SkillsSection />
      <LanguagesSection />
      <ProjectsSection />
      <EducationSection /> 
      <CertificatesSection />
    </main>
  );
}
