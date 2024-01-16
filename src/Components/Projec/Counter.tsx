import { repos } from '@/data/projects'
import Image from 'next/image'
import arrowRight from '../../icons/arrowRight.svg'
import arrowLeft from '../../icons/arrowleft.svg'

const Counter: React.FC<any> = ({ currentIndex }) => {
  return (
    <div className='flex justify-center items-center'>
      <Image
        src={arrowLeft}
        alt='arrow right'
        width={50}
        height={50}
        style={{ filter: 'invert(1)' }}
      />
      <div className='flex justify-center items-center'>
        {repos.map((repo: any) => (
          <p
            key={repo.id}
            className='text-white font-black align-baseline px-8 transition-all duration-1000'
            style={
              currentIndex + 1 === repo.id
                ? { fontSize: '7rem' }
                : { fontSize: '4rem', opacity: '0.5' }
            }
          >
            {repo.id}
          </p>
        ))}
      </div>
      <Image
        src={arrowRight}
        alt='arrow right'
        width={50}
        height={50}
        style={{ filter: 'invert(1)' }}
      />
    </div>
  )
}

export default Counter
