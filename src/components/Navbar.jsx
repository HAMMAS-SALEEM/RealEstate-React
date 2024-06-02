import React from 'react'
import { authMethods } from '../services/auth-service'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleAuth } from '../redux/auth/auth'

const Navbar = ({ navbar }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSignOut = () => {
    authMethods.signOut()
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
      <NavLink to={"/myestates"}>MyEstates</NavLink>
      <button type='button' onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  )
}

export default Navbar
