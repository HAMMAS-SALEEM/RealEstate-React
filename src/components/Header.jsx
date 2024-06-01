import React, { useState } from 'react'
import Navbar from './Navbar'
import BurgerIcon from './BurgerIcon'

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const handleNavbar = () => setNavbar(prev => !prev)

  return (
    <div className='navbar bg-black'>
      <div className="navbar-sub-section">
        <BurgerIcon handleNavbar={handleNavbar} />
      </div>
      <Navbar navbar={navbar} />
    </div>
  )
}

export default Header;
