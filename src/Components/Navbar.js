import React, {useState} from 'react'
import Logo from "../Assets/pig.png"
import "../Css/Navbar.css"

function Navbar() {
  // const [useSandwich, setUseSandwich] = useState(true);
  const [openDropDown, setOpenDropDown] = useState(true);

  const toggleDropDown = () =>{
    setOpenDropDown((prevValue)=>{
      return !prevValue;
    })
  }

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
        <div className='Nav-Sandwich' onClick={toggleDropDown}>
          <div className='Sandwich Layer-1'></div>
          <div className='Sandwich Layer-2'></div>
        </div>
        
          <div className={!openDropDown ? 'Dropdown Dropdown-opened' : 'Dropdown'}>
            <div className='Drop-close' onClick={toggleDropDown}>
              <div className='cross cross-left'></div>
              <div className='cross cross-right'></div>
            </div>
            <div className='Drop-item'>Image Filter</div>
            <div className='Drop-item'>Video Filter</div>
            <div className='Drop-item'>Signup</div>
            <div className='Drop-item'><div className="Drop-Login">Login</div></div>
          </div>
    </nav>
  )
}

export default Navbar