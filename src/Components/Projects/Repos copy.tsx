import { ReactSVG } from 'react-svg'
import github from '../../icons/github.svg'
import Image from 'next/image'

const Repos: React.FC<any> = ({ repos }) => {
  return (
    <div
      className='flex p-8 my-5 rounded-md'
      style={{ backgroundColor: '#2d425781' }}
    >
      <div className='bg-gray-800 bg-opacity-60 p-8 rounded-md mr-6'>
        <div className='flex flex-col pr-6'>
          <p className='text-3xl text-white mx-4 pb-4 font-bold align-baseline'>
            {repos.name}
          </p>
          <p className='text-xl pb-6'> {repos.description}</p>
          <ul className='flex flex-wrap pb-4'>
            <p className='px-2 py-1 font-bold'>Built with: </p>
            {repos.tools.map((tool: string) => (
              <li
                key={tool}
                className='text-lg px-2 py-1 bg-gray-300 bg-opacity-60 m-1 '
              >
                {tool}
              </li>
            ))}
          </ul>
          <div className='flex justify-around align-center'>
            <div className='flex text-lg align-center'>
              <ReactSVG src={github} />
              <a
                className='px-2'
                href={repos.repoUrl}
              >
                Link to Repo
              </a>
            </div>
            <div className='flex text-lg align-center'>
              <ReactSVG src={github} />
              <a
                className='px-2'
                href={repos.demoUrl}
              >
                Live Preivew
              </a>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={repos.img}
        width={700}
        height={700}
        alt='notebook'
        className='shadow-2xl rounded-md'
      />
    </div>
  )
}

export default Repos
