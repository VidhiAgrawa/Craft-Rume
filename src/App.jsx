import { useState } from 'react'
import './App.css'
import background from './assets/background.mp4'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Aboutus from './Components/AboutUs/Aboutus'
import Templete from './Components/Templete/Templete'

function App() {

  return (
    <>
    <video src={background} 
          className='back-video' 
          autoPlay
          loop
          muted
          playsInline>
    </video>
      <main className="main-div">
        <div className="navbar flex">
          <Navbar/>
        </div>
        <div className="home-page flex">
          <Home/>
        </div>
        <div className="about-us-page flex" id="about-us-section">
          <Aboutus/>
        </div> 
        <div className="steps-box flex" id="templete-section">
          <Templete/>
        </div>
      </main>
    </>
  )
}

export default App
