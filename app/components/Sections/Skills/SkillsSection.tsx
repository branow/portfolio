import React from 'react'
import Section from '../Section'
import SkillCard from './SkillCard'
import java from '@/public/skills/java.png'
import spring from '@/public/skills/spring.png'
import javafx from '@/public/skills/javafx.png'
import mysql from '@/public/skills/mysql.png'
import git from '@/public/skills/git.png'
import reactjs from '@/public/skills/reactjs.png'
import nextjs from '@/public/skills/nextjs.png'
import tailwind from '@/public/skills/tailwind.png'



const SkillsSection = () => {
  return (
    <>
    <Section
      title="Skills"
      content={
        <div className='flex flex-row gap-4 flex-wrap justify-center'>
          <SkillCard title="Java SE" score={75} image={java}/>
          <SkillCard title="Spring Framowork" score={30} image={spring}/>
          <SkillCard title="JavaFX UI" score={50} image={javafx}/>
          <SkillCard title="MySQL RDMS" score={80} image={mysql}/>
          <SkillCard title="Git VCS" score={70} image={git}/>
          <SkillCard title="React.js" score={45} image={reactjs}/>
          <SkillCard title="Next.js" score={30} image={nextjs}/>
          <SkillCard title="Tailwind CSS" score={30} image={tailwind}/>
        </div>
      }
    />
  </>
  )
}

export default SkillsSection