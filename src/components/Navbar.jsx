import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleAuth } from '../redux/auth/auth'
import { deleteCookie } from '../utils/cookieHandler'

const Navbar = ({ navbar, handleNavbar }) => {
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
      <NavLink className="bg-heading-color text-white font-bold text-center"  to={"/"} >Home</NavLink>
      <NavLink className="bg-heading-color text-white font-bold text-center"  to={"/dashboard"}>Dashboard</NavLink>
      <button  className="bg-heading-color text-white font-bold" type='button' onClick={handleSignOut}>
        Sign Out
      </button>
      <button type="button" onClick={handleNavbar} className="bg-black text-white w-8 h-8 rounded font-bold navbar-close-btn">X</button>
    </div>
  )
}

export default Navbar
