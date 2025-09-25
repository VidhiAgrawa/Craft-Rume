import React from 'react'
import './Navbar.css'
import moon from "../../assets/moon.png"
function Navbar() {
  return (
    <>
    <main className="main-top-nav flex">
        <div className="logo">Craftrume</div>
        <div className="nav-main flex">
            <div className="navbar-div">
                <div className="home flex"><span>Home</span></div>
                <div className="about-us flex"><span>About us</span></div>
                <div className="templete flex"><span>Templete</span></div>
                <div className="sign-in flex"><span>SignIn</span></div>
                <div className="theme flex"><img src={moon} alt="" className='moon'/></div>
            </div>
        </div>
        <div className="profile">profile</div>

    </main>
    
    </>
  )
}

export default Navbar