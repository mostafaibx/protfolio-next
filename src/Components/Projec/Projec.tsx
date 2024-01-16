'use client'
import { useState } from 'react'
import './Projec.css'
import Repos from '../Projects/Repos'
import { repos } from '@/data/projects'
import Counter from './Counter'

const positionsC1 = [
  { t: -5, l: 50 },
  { t: 50, l: 30 },
  { t: -7, l: 44 },
  /*   { t: -25, l: -17 }, */
]
const positionsC2 = [
  { t: 18, l: 63 },
  { t: -32, l: -2 },
  { t: 15, l: 73 },
  { t: 15, l: -6 },
]
const positionsC3 = [
  { t: 41, l: 72 },
  { t: 15, l: 24 },
  { t: 15, l: 100 },
  { t: 45, l: -8 },
]

const sizesArr = [
  {
    c1: { w: 70, h: 70 },
    c2: { w: 50, h: 50 },
    c3: { w: 40, h: 40 },
  },
  {
    c1: { w: 20, h: 20 },
    c2: { w: 80, h: 80 },
    c3: { w: 50, h: 50 },
  },
  {
    c1: { w: 50, h: 50 },
    c2: { w: 30, h: 30 },
    c3: { w: 20, h: 20 },
  },
  {
    c1: { w: 70, h: 70 },
    c2: { w: 40, h: 40 },
    c3: { w: 30, h: 30 },
  },
]

// we can add option for circle & rectangle & square

const Projec = () => {
  const [positionC1, setPositionC1] = useState(positionsC1[0])
  const [positionC2, setPositionC2] = useState(positionsC2[0])
  const [positionC3, setPositionC3] = useState(positionsC3[0])
  const [sizes, setSizes] = useState(sizesArr[0])
  const [currentIndex, setCurrentIndex] = useState(0)

  const changeSlideHandler = () => {
    const newIndex = (currentIndex + 1) % positionsC1.length
    setPositionC1(positionsC1[newIndex])
    setPositionC2(positionsC2[newIndex])
    setPositionC3(positionsC3[newIndex])
    setSizes(sizesArr[newIndex])
    setCurrentIndex(newIndex)
  }

  return (
    <div>
      <button
        className='px-4 py-2 mt-20 mx-4 text-white bg-slate-700'
        onClick={changeSlideHandler}
      >
        Change
      </button>
      <Counter currentIndex={currentIndex} />
      <div className='  flex justify-center items-center'>
        <div className='container'>
          <div className='w-full h-full absolute t-0 l-0 flex justify-center items-center z-50'>
            <Repos repos={repos[currentIndex]} />
          </div>
          <div
            className={`circle  bg-gradient-to-tl from-black to-rose-800`}
            style={{
              width: `${sizes.c1.w}rem`,
              height: `${sizes.c1.h}rem`,
              top: `${positionC1.t}%`,
              left: `${positionC1.l}%`,
              transitionDuration: '3000ms',
            }}
          ></div>
          <div
            className='circle bg-gradient-to-tl from-black to-rose-500'
            style={{
              width: `${sizes.c2.w}rem`,
              height: `${sizes.c2.h}rem`,
              top: `${positionC2.t}%`,
              left: `${positionC2.l}%`,
              transitionDuration: '3000ms',
            }}
          ></div>
          <div
            className='circle bg-black'
            style={{
              width: `${sizes.c3.w}rem`,
              height: `${sizes.c3.h}rem`,
              top: `${positionC3.t}%`,
              left: `${positionC3.l}%`,
              transitionDuration: '3000ms',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Projec
