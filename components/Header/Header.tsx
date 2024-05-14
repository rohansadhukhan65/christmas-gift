import React from 'react'
import Logo from '../Icons/Logo'
import NightThemeIcon from '../Icons/NightThemeIcon'
import MenuIcon from '../Icons/MenuIcon'

const Header = () => {
  return (
    <div className='header-container'>
      <div><Logo/></div>
      <div className='header-actions'>
        <div><NightThemeIcon/></div>
        <div><MenuIcon/></div>
      </div>
    </div>
  )
}

export default Header
