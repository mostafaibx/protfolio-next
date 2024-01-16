'use client'
import SkillBox from './SkillBox'
import { skills } from '@/data/skills'

const Skills = () => {
  return (
    <>
      <h1 className='text-5xl font-bold text-white text-center mt-20'>
        Skills
      </h1>
      <div className='flex flex-wrap justify-center gap-12 px-14 py-20'>
        {skills.map((skill: any) => (
          <div key={skill.id}>
            <SkillBox {...skill} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Skills
