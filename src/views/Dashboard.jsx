import React from 'react'
import AppLayout from '../layout/AppLayout'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
  const username = JSON.parse(localStorage.getItem('user'))
  console.log(username.username)
  return (
    <div>
      <h2 className='text-center text-3xl font-bold mt-20'>
        Welcome {username.username}!
      </h2>
      <div className="flex flex-col justify-center items-center mt-5 gap-2">
        <NavLink className="bg-black text-white px-5 py-3 rounded-sm" to={'/create_post'}>Create Post</NavLink>
        <NavLink className="bg-black text-white px-5 py-3 rounded-sm" to={'/view_listing'}>View Listing</NavLink>
      </div>
    </div>
  )
}

export default AppLayout()(Dashboard)
