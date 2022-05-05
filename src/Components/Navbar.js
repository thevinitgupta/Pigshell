import React, {useContext, useState, useEffect} from 'react'
import Logo from "../Assets/pig.png"
import "../Css/Navbar.css"
import { useNavigate } from 'react-router-dom';
import AuthUserContext from '../context/sessions';
import { AppwriteContext } from './Appwrite';

function Navbar() {
  // const [useSandwich, setUseSandwich] = useState(true);
  const [openDropDown, setOpenDropDown] = useState(true);
  const [loggedIn,setLoggedIn] = useState(false);

  const navigate = useNavigate();
  const {authUser,getCurrentUser} = useContext(AuthUserContext);
  const appwrite = useContext(AppwriteContext);

  const handleLogout = () => {
    appwrite
      .logoutUser()
      .then(() => {
        getCurrentUser();
      })
      .catch((err) => console.log(err));
  };


  const toggleDropDown = () =>{
    setOpenDropDown((prevValue)=>{
      return !prevValue;
    })
  }

  useEffect(() => {
    if(authUser) setLoggedIn(true);
    else setLoggedIn(false);
  }, [authUser])


  return (
    <nav className='Navbar'>
        <div className='Navbar-Logo'>
            <img className='pigshell-logo' onClick={()=>{
              navigate("/")
            }} src={Logo} alt="pig logo"/>
        </div>
        <div className='Navmenu'>
            <div className='Nav-item' onClick={()=>{
              navigate("/image");
            }}>Image Filter</div>
            <div className='Nav-item' onClick={()=>{
              navigate("/video");
            }}>Video Filter</div>
            {!authUser && <div className='Nav-item' onClick={()=>{
              navigate("/signup");
            }}>Signup</div>}
            {!authUser? <div className='Login-Btn' onClick={()=>{
              navigate("/login");
            }}>Login</div> : <div className='Nav-item' onClick={()=>{
              handleLogout();
            }}>Logout</div>}
            {/* <div className='Login-Btn' onClick={()=>{
              navigate("/login");
            }}>Login</div> */}
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
            <div className='Drop-item' onClick={()=>{
              navigate("/image");
            }}>Image Filter</div>
            <div className='Drop-item' onClick={()=>{
              navigate("/video");
            }}>Video Filter</div>
            <div className='Drop-item' onClick={()=>{
              navigate("/signup");
            }}>Signup</div>
            <div className='Drop-item'><div className="Drop-Login" onClick={()=>{
              navigate("/login");
            }}>Login</div></div>
          </div>
    </nav>
  )
}

export default Navbar