import { useState } from 'react'
import './App.css'
import background from './assets/background.mp4'
import Navbar from './Components/Navbar/Navbar'
import Aboutus from './Components/AboutUs/Aboutus'
import Home from './Components/Home/Home'

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
        {/* <div className="about-us-page flex">
          <Aboutus/>
        </div> */}
        {/* <div className="steps-box flex">hello</div> */}
      </main>
    </>
  )
}

export default App
