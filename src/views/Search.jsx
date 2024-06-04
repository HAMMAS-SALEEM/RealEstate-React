import React from 'react'
// import Filters from '../components/Filters'
import AppLayout from '../layout/AppLayout'

const Search = () => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target[0].value)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-center items-center p-5 gap-3'
    >
      {/* <Filters /> */}
      <input
        type='text'
        placeholder='Keyword'
        className='border p-3 font-bold outline-none'
      />
      <button
        type='submit'
        className='w-30 border hover:bg-black bg-heading-color hover:text-white text-black font-bold p-3'
      >
        Search
      </button>
    </form>
  )
}

export default AppLayout()(Search)
