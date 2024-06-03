import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleAuth } from '../redux/auth/auth'
import { deleteCookie } from '../utils/cookieHandler'

const Navbar = ({ navbar }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOut = () => {
    deleteCookie("accessToken");
    dispatch(handleAuth())
    navigate('/login')
  }

  return (
    <div
      className={
        navbar ? 'navbar-btns navbar-open' : 'navbar-btns navbar-close'
      }
    >
      <button type='button'>Home</button>
      <button type='button'>Store</button>
      <button type='button'>Contact</button>
      <NavLink to={"/dashboard"}>MyEstates</NavLink>
      <button type='button' onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  )
}

export default Navbar
