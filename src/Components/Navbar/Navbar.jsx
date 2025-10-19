import React from 'react'
import './Navbar.css'
import moon from "../../assets/moon.png"
import logo from "../../assets/logo.png"
import { useNavigate } from 'react-router'
function Navbar() {
  const navigate = useNavigate()
  const scrollToAboutUs = () => {
    const aboutSection = document.getElementById("about-us-section")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  const scrollToTemplete = () => {
    const templeteSection = document.getElementById("templete-section")
    if (templeteSection) {
      templeteSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <>
    <main className="main-top-nav flex ">
        <div className="logo flex">
          <img src={logo} alt="" className='logo-img' />
        </div>
        <div className="nav-main flex">
            <div className="navbar-div">
                <div className="home flex"><span>Home</span></div>
                <div className="about-us flex" onClick={scrollToAboutUs}><span >About us</span></div>
                <div className="templete flex" onClick={scrollToTemplete}><span>Templete</span></div>
                <div className="sign-in flex" onClick={() => navigate("/")}><span>SignUp</span></div>
                <div className="theme flex"><img src={moon} alt="" className='moon'/></div>
            </div>
        </div>
        <div className="profile flex" ><i className="fa-solid fa-user"></i></div>

    </main>
    
    </>
  )
}

export default Navbar