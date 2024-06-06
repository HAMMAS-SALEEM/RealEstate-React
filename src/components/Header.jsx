import React, { useState } from 'react'
import Navbar from './Navbar'
import BurgerIcon from './BurgerIcon'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import user from '../assets/usere.png'

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const handleNavbar = () => setNavbar(prev => !prev)

  const signedIn = useSelector(store => store.auth.signedIn)

  return (
    <div className='navbar bg-black'>
      <div className='navbar-sub-section'>
        <BurgerIcon handleNavbar={handleNavbar} />
        {signedIn ? (
          <NavLink to='/dashboard' className='nav-link font-bold rounded'>
            <img src={user} alt={user} />
          </NavLink>
        ) : (
          <NavLink to='/login' className='nav-link bg-white p-1 font-bold rounded'>
            Login
          </NavLink>
        )}
      </div>
      <Navbar navbar={navbar} handleNavbar={handleNavbar} />
    </div>
  )
}

export default Header
