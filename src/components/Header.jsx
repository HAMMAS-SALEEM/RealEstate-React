import React, { useState } from 'react'
import Navbar from './Navbar'
import BurgerIcon from './BurgerIcon'
import CartIcon from './CartIcon'

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const handleNavbar = () => setNavbar(prev => !prev)

  return (
    <div className='navbar'>
      <div className="navbar-sub-section">
        <BurgerIcon handleNavbar={handleNavbar} />
        <CartIcon />
      </div>
      <Navbar navbar={navbar} />
    </div>
  )
}

export default Header
