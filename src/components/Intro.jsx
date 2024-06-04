import React from 'react'
import { NavLink } from 'react-router-dom'

const Intro = () => {
  return (
    <div className='intro-container flex justify-center items-center relative'>
      <div className='overlay absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25'></div>
      <NavLink
        to={"/search"}
        className='bg-black hover:bg-heading-color text-white hover:text-black p-5 transition-all font-bold text-xl z-10'
      >
        FIND YOUR PROPERTY
      </NavLink>
    </div>
  )
}

export default Intro
