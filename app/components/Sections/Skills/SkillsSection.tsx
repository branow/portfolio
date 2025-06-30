import Section from '../Section'
import SkillCard from './SkillCard'
import data from "@/app/portfolio";

const SkillsSection = () => {
  return (
    <>
    <Section
      title="Skills"
      content={
        <div className='flex flex-row gap-4 flex-wrap justify-center'>
          {data.skills.map(skill => (
            <SkillCard title={skill.title} score={skill.score} image={skill.image} />
          ))}
        </div>
      }
    />
  </>
  )
}

export default SkillsSection
