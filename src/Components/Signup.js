import React from 'react'
import SignupImg from "../Assets/Signup.png"
import "../Css/Signup.css"

function Signup() {
  return (
    <div className='Signup'>
        <div className='Signup-left'>
            <div className='Signup-head'>
                Sign Up
            </div>
            <div className='Signup-card'>
                <form id='Signup-form'>

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