import React, { useState } from 'react'
import SignupImg from "../Assets/Signup.png"
import "../Css/Signup.css"

function Signup() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
   return (
    <div className='Signup'>
        <div className='Signup-left'>
            <div className='Signup-head'>
                Sign Up
                <div className='Signup-subhead'>
                    Create account to access images from anywhere
                </div>
            </div>
            <div className='Signup-card'>
                <form className='Signup-form'>
                    <input className='Signup-input' id='signup-name' value={name} onChange={(e)=>{
                        setName(e.target.value);
                    }}/>
                    <input className='Signup-input' id='signup-email' value={email} onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
                    <input className='Signup-input' id='signup-password' value={password} onChange={(e)=>{
                        setPassword(e.target.value);
                    }}/>
                </form>
            </div>
        </div>
        <div className='Signup-right'>
        <div className='Signup-welcome'>
        <h2>Welcome to PigShell</h2>
            <p>Start your journey full of Piggy Awesomeness!</p>
        </div>
        <div className='Signup-img'>
            <img src={SignupImg} alt='signup'/>
        </div>
        </div>
    </div>
  )
}

export default Signup