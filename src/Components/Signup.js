import React, { useState } from 'react'
import SignupImg from "../Assets/Signup.png"
import "../Css/Signup.css"

function Signup() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log({name : name, email : email, password : password});
    }
   return (
    <div className='Signup'>
        <div className='Signup-left'>
            <div className='Signup-head'>
                <div>Sign Up</div>
                <div className='Signup-subhead'>
                    Create account to access images from anywhere
                </div>
            </div>
            <div className='Signup-card'>
                <form className='Signup-form'>
                    {/* <label for="name">Your Name</label> */}
                    <input className='Signup-input' name='name' placeholder='Name' id='signup-name' autoComplete='off' value={name} onChange={(e)=>{
                        setName(e.target.value);
                    }}/>
                    <input className='Signup-input' placeholder='Email' autoComplete='off' id='signup-email' value={email} onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
                    <input className='Signup-input' placeholder='Password' type='password' autoComplete='off' id='signup-password' value={password} onChange={(e)=>{
                        setPassword(e.target.value);
                    }}/>
                    <button type="submit" id='signup-btn' 
                    onClick={handleSignup}>Create Account</button>
                </form>
            </div>
            <div className='Signup-footer'>
                <p>Already have account? <a className='login-redirect highlight-text' href='/login'>Login Now</a></p>
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