import React from 'react'
import './Home.css'
import fastForward from '../../assets/fast-forward.gif'
function Home() {
  return (
    <main className="home-main flex">
        <div className="first-heading flex">
            <h1>From first draft to flawless, we make it prime.</h1>
            <h1>Craftrume saves you hours of time.</h1>
        </div>
        <div className="sub-heading flex">
            <h2>A crafted resume makes you shine bright.</h2>
            <h2>Stand out strong, land it right.</h2>
        </div>
        <div className="building-button flex">
            <button className="build flex">
                <span>Build Your Resume</span>
                <img src={fastForward} alt="" className="forward" />
            </button>
        </div>
    </main>
  )
}

export default Home