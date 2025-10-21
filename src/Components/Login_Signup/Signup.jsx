import React, { useEffect, useState } from 'react'

import {useNavigate} from "react-router"
import "./LoginSignup.css"


import loginBlue from "../../assets/login-Blue.png"
import man from "../../assets/man.png"
import  leaf from "../../assets/leaf.png"
function Signup() {
  const navigate = useNavigate()

  const[signupUser, setsignupUser] = useState("")
  const [signupPass, setsignupPass] = useState("");
  
    const handleSubmitBtn = (e) => {
      e.preventDefault();
  
      if (signupUser.trim() === "" || signupPass.trim() === "") {
        alert("Please fill details");
        return;
      }
      navigate("/");
    };

  return (
    <>
        <div className="main-sign flex">
          <img src={loginBlue} className='img-login-back' alt="" />
          <img src={man} className='man-image-login' alt="" />
          <img src={leaf} className='leaf-image-login' alt="" />
            <section className="signup-section flex">
              <section className="sub-head-sec flex">
                <h1>Sign up</h1>
              </section>
              <form className="sub-detail-signup flex" onSubmit={handleSubmitBtn}>
                <div className="sign-username flex">
                  <span>Username</span>
                  <input type="text" 
                  placeholder="Enter Username" 
                  className="signusername"
                  value={signupUser}
                  onChange={(e) => setsignupUser(e.target.value)}  />
                </div>
                <div className="sign-password flex">
                  <span>Password</span>
                  <input type="password" 
                  placeholder="Enter Password" 
                  className="signpassword"
                  value={signupPass}
                  onChange={(e) => setsignupPass(e.target.value)} />
                </div>
                <div className="forgotPasswordSignup">
                  <div className="forgotPassword">Already a User <i class="fa-solid fa-question questionMark"></i></div>
                  <div className="signup" onClick={() => navigate("/login")}>Login</div>
                </div>
                <div className="identification flex">
                  <button className={`student`} >Student</button>
                  <button className={`profesor`} >Professor</button>
                  <button className={`admin`} >Admin</button>
                </div>
                <div className="submission flex">
                  <button className="submitting-sign" type="submit" onClick={handleSubmitBtn}>Submit</button>
                </div>
                
              </form>
            </section>
        </div>
    </>
  )
}

export default Signup
