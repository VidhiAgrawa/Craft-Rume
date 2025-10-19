import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router"

import loginBlue from "../../assets/login-Blue.png"
import man from "../../assets/man.png"
import  leaf from "../../assets/leaf.png"
function Login() {
  const navigate = useNavigate()
  

  return (
    <>
        <div className="main-login flex">
            <img src={loginBlue} className='img-login-back' alt="" />
            <img src={man} className='man-image-login' alt="" />
            <img src={leaf} className='leaf-image-login' alt="" />
            <section className="login-section flex">
              <section className="sub-head-sec flex">
                <h1>Login</h1>
              </section>
              <form className="sub-detail-signup flex" >
                <div className="login-username flex">
                  <span>Username</span>
                  <input type="text" 
                    placeholder="Enter Username" 
                    className="loginusername" 
                  />
                </div>
                <div className="login-password flex">
                  <span>Password</span>
                  <input 
                    type="password"  
                    placeholder="Enter Password" 
                    className="loginpassword" 
                    />
                </div>
                <div className="forgotPasswordSignup">
                  <div className="forgotPassword">Forgot Password <i class="fa-solid fa-question questionMark"></i></div>
                  <div className="signup" onClick={() => navigate("/")}>Signup</div>
                </div>
                <div className="submission flex">
                  <button className="submitting-login" type="submit" onClick={() => navigate("/home")}>Submit</button>
                </div>
              </form>
            </section>
        </div>
    </>
  )
}

export default Login
