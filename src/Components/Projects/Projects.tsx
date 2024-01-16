'use client'
import Repos from './Repos'
import { repos } from '@/data/projects'

const Projects = () => {
  return (
    <div className='text-2xl text-white'>
      <h1 className='text-4xl  pt-24 px-10 '>
        Some Introduction to this secction
      </h1>
      <div className='flex flex-col p-14'>
        {repos.map((repo: any) => (
          <Repos
            key={repo.id}
            repos={repo}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
