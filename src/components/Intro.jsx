import React from 'react'

const Intro = () => {
  return (
    <div className='intro-container flex justify-center items-center relative'>
      <div className='overlay absolute top-0 bottom-0 left-0 right-0 bg-black opacity-25'></div>
      <h1 className='bg-black text-white p-5 font-bold'>FIND YOUR PROPERTY</h1>
    </div>
  )
}

export default Intro
