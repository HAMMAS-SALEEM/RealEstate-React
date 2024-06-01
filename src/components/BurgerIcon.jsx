import React from 'react'
import HamburgerIcon from '../assets/hamburger.svg';

const BurgerIcon = ({handleNavbar}) => {
  return (
    <button type="button" onClick={handleNavbar} className="navbar-btn">
      <img src={HamburgerIcon} alt="Hamburger Icon" className="hamburger-icon" />
    </button>
  )
}

export default BurgerIcon;
