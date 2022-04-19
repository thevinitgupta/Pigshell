import React from 'react'
import Logo from "../Assets/pig.png"
import "../Css/Navbar.css"

function Navbar() {
  return (
    <nav className='Navbar'>
        <div className='Navbar-Logo'>
            <img className='pigshell-logo' src={Logo} alt="pig logo"/>
        </div>
        <div className='Navmenu'>
            <div className='Nav-item'>Image Filter</div>
            <div className='Nav-item'>Video Filter</div>
            <div className='Nav-item'>Signup</div>
            <div className='Login-Btn'>Login</div>
        </div>
    </nav>
  )
}

export default Navbar