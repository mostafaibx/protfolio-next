import github from '../../icons/github.svg'
import Image from 'next/image'
import play from '../../icons/play.svg'

const Repos: React.FC<any> = ({ repos }) => {
  return (
    <div className='flex flex-col justify-center items-center relative'>
      <p className=' text-5xl text-white font-bold mx-10 pb-10'>{repos.name}</p>
      <div className='flex justify-center'>
        <Image
          src={repos.img}
          width={550}
          height={350}
          alt='notebook'
          className='shadow-2xl rounded-md mx-10'
        />
        <div className='flex flex-col w-2/6'>
          <p className='text-xl pb-6'> {repos.description}</p>
          <ul className='flex flex-wrap pb-4'>
            <p className='px-2 py-1 text-xl font-bold'>Built with: </p>
            {repos.tools.map((tool: string) => (
              <li
                key={tool}
                className='text-lg px-2 py-1 bg-gray-300 bg-opacity-60 m-1 '
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className='flex justify-around w-fit align-center text-2xl absolute'
        style={{ top: '115%', left: '68%' }}
      >
        <div className='flex align-center mx-3'>
          <Image
            src={github}
            width={30}
            height={30}
            alt='github icon'
            style={{ filter: 'invert(1)' }}
          />
          <a
            className='px-2'
            target='_blank'
            href={repos.repoUrl}
          >
            Link to Repo
          </a>
        </div>
        <div className='flex align-center mx-3'>
          <Image
            src={play}
            width={20}
            height={20}
            alt='github icon'
            style={{ filter: 'invert(1)' }}
          />
          <a
            className='px-2'
            target='_blank'
            href={repos.demoUrl}
          >
            Live Preivew
          </a>
        </div>
      </div>
    </div>
  )
}

export default Repos
