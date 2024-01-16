import linkedIn from '../../icons/linkedIn.svg'
import xing from '../../icons/xing.svg'
import github from '../../icons/github.svg'
import medium from '../../icons/medium.svg'
import email from '../../icons/email.svg'
import './contact.css'
import Image from 'next/image'

const Contact = () => {
  return (
    <div
      className='w-100vh h-3/5 text-white p-10 flex justify-around items-center'
      style={{ filter: 'invert(1)' }}
    >
      <a
        href='https://www.linkedin.com/in/mostafa-ibrahim-61b52411a/'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src={linkedIn}
          width={60}
          height={60}
          alt='linked in icon'
          className='contact-icon'
        />
      </a>
      <a
        href='https://www.xing.com/profile/Mostafa_Ibrahim059137'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src={xing}
          width={60}
          height={60}
          alt='xing in icon'
          className='contact-icon'
        />
      </a>
      <a
        href='https://github.com/mostafaibx'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src={github}
          width={60}
          height={60}
          alt='github in icon'
          className='contact-icon'
        />
      </a>
      <a
        href='https://medium.com/@imostafax'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src={medium}
          width={60}
          height={60}
          alt='medium in icon'
          className='contact-icon'
        />
      </a>
      <a
        href='mailto:imostafa330@gmail.com'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src={email}
          width={60}
          height={60}
          alt='email in icon'
          className='contact-icon'
        />
      </a>
    </div>
  )
}

export default Contact
