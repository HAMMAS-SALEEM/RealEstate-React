import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleAuth } from '../redux/auth/auth'
import { deleteCookie } from '../utils/cookieHandler'

const Navbar = ({ navbar, handleNavbar }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const auth = useSelector(store => store.auth)

  const handleSignOut = () => {
    deleteCookie('accessToken')
    dispatch(handleAuth())
    navigate('/login')
  }

  return (
    <div
      className={
        navbar ? 'navbar-btns navbar-open' : 'navbar-btns navbar-close'
      }
    >
      <div className='flex flex-col gap-1'>
        <NavLink
          className='bg-heading-color text-white font-bold text-center'
          to={'/'}
        >
          Home
        </NavLink>
        <a
          href='#'
          className='bg-heading-color text-white font-bold text-center'
        >
          Properties
        </a>
        <a
          href='#'
          className='bg-heading-color text-white font-bold text-center'
        >
          Contact Us
        </a>
      </div>
      {auth.signedIn && (
        <button
          className='bg-heading-color text-white font-bold'
          type='button'
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      )}
      <button
        type='button'
        onClick={handleNavbar}
        className='bg-black text-white w-8 h-8 rounded font-bold navbar-close-btn self-end'
      >
        X
      </button>
    </div>
  )
}

export default Navbar
