import './skill-box.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
const SkillBox: React.FC<any> = ({ name, icon, color }) => {
  return (
    <div className='flex flex-col justify-center items-center w-[120px]'>
      {icon ? (
        <motion.div
          className='w-[120px] h-[120px] flex justify-center items-center '
          initial={{ scale: 1 }}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 4000,
          }}
        >
          <Image
            src={icon}
            width={100}
            height={100}
            alt='skill icon'
            className='inactive'
          />
        </motion.div>
      ) : null}
      <p className={`text-2xl font-bold ${color}`}>{name}</p>
    </div>
  )
}

export default SkillBox
