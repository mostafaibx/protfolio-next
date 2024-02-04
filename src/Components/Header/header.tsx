'use client'
import { useState } from 'react'
import './header.css'
import Link from 'next/link'

const Header = () => {
  const [selected, setSelected] = useState({ w: 50, p: 0 })
  const onSelectHandler = (p: number) => {
    setSelected({ w: 0, p })
    setTimeout(() => setSelected({ w: 50, p }), 500)
  }

  ;<Link href='/dashboard'>Dashboard</Link>
  return (
    <div className='w-full h-12 bg-gray-600 bg-opacity-80 text-white fixed z-50'>
      <span
        className='under-line'
        style={{ left: `${selected.p}%`, width: `${selected.w}%` }}
      ></span>
      <ul className='flex justify-around text-xl py-4 relative'>
        <Link href='/'>
          <li
            className='cursor-pointer font-bold hover:scale-125 transition-all duration-300'
            onClick={() => onSelectHandler(0)}
          >
            Home
          </li>
        </Link>
        <Link href='/projects'>
          <li
            className='cursor-pointer font-bold hover:scale-125 transition-all duration-300'
            onClick={() => onSelectHandler(50)}
          >
            My Projects
          </li>
        </Link>
        {/*      <Link href='/cv'>
          <li
            className='cursor-pointer font-bold hover:scale-125 transition-all duration-300'
            onClick={() => onSelectHandler(66.5)}
          >
            My CV
          </li>
        </Link> */}
      </ul>
    </div>
  )
}

export default Header
