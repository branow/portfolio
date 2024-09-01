import docker from '@/public/skills/docker.png'
import git from '@/public/skills/git.png'
import golang from '@/public/skills/golang.png'
import java from '@/public/skills/java.png'
import mysql from '@/public/skills/mysql.png'
import nextjs from '@/public/skills/nextjs.png'
import reactjs from '@/public/skills/reactjs.png'
import spring from '@/public/skills/spring.png'
import tailwind from '@/public/skills/tailwind.png'
import Section from '../Section'
import SkillCard from './SkillCard'



const SkillsSection = () => {
  return (
    <>
    <Section
      title="Skills"
      content={
        <div className='flex flex-row gap-4 flex-wrap justify-center'>
          <SkillCard title="Golang" score={40} image={golang} />
          <SkillCard title="Java SE" score={80} image={java}/>
          <SkillCard title="Spring Framework" score={50} image={spring}/>
          
          <SkillCard title="MySQL RDMS" score={80} image={mysql}/>
          
          <SkillCard title="React.js" score={45} image={reactjs}/>
          <SkillCard title="Next.js" score={30} image={nextjs}/>
          <SkillCard title="Tailwind CSS" score={30} image={tailwind} />
          
          <SkillCard title="Git VCS" score={70} image={git} />
          <SkillCard title="Docker" score={30} image={docker} />
        </div>
      }
    />
  </>
  )
}

export default SkillsSection