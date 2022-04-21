import React from 'react'
import "../Css/Home.css";
import Camera from "../Assets/camera.png"

function Home() {
  return (
    <div className='Home'>
       <div className='Home-left'>
           <div className='Home-head'>
           Love <span className='head-code'>tech</span> and using filters?
           </div>
           <div className='Home-subhead'>
               You're in the right place. Try out our products.
           </div>
       </div> 
       <div className='Home-right'>
           <img src={Camera} alt="camera"/>
       </div> 
    </div>
  )
}

export default Home