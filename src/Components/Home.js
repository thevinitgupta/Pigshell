import React from 'react'
import "../Css/Home.css";
import Camera from "../Assets/camera.png"

function Home() {
  return (
    <div className='Home'>
       <div className='Home-left'></div> 
       <div className='Home-right'>
           <img src={Camera} alt="camera"/>
       </div> 
    </div>
  )
}

export default Home