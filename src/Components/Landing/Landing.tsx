import Image from 'next/image'
import './landing.css'

const Landing = () => {
  return (
    <div className='flex justify-between items-center w-100vh h-full text-white px-16 2xl:px-48 pb-10 pt-32'>
      <div className='flex flex-col justify-center align-center p-10'>
        <p className='text-7xl text-white mb-5 font-sans font-bold'>
          Know About me!<span className='text-6xl'>👋</span>
        </p>
        <p className='text-3xl'> My Name is Mostafa</p>
        <p className='text-2xl text-grey mt-5 center pr-28'>
          I am a frontend developer with multilingual skills, currently pursuing
          a Bachelor in Business Informatics. My passion for web development
          increases by the minute, which drives me to learn more everyday.
        </p>
        <a
          href='https://file.io/qdATz6LyJ75m'
          target='_blank'
          className='relative w-fit mt-10 px-6 py-4 text-xl font-semibold text-white rounded-lg group'
        >
          <span className='absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-rose-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0'></span>
          <span className='absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-rose-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen'></span>
          <span className='relative hover:scale-105 transition-all duration-300'>
            Download my CV
          </span>
        </a>
      </div>

      <Image
        className='profile-pic'
        src='https://i.imgur.com/0Ek0Ibe.jpg'
        alt='cvPhoto'
        width={300}
        height={300}
      />
    </div>
  )
}

export default Landing
