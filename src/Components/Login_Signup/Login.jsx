import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router"

import loginBlue from "../../assets/login-Blue.png"
import man from "../../assets/man.png"
import  leaf from "../../assets/leaf.png"
function Login() {
  const navigate = useNavigate()
  const[loginUser, setLoginUser] = useState("")
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmitBtn = (e) => {
    e.preventDefault();

    if (loginUser.trim() === "" || loginPassword.trim() === "") {
      alert("Please fill in both Username and Password!");
      return;
    }
    navigate("/");
  };

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
              <form className="sub-detail-signup flex" onSubmit={handleSubmitBtn}>
                <div className="login-username flex">
                  <span>Username</span>
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="loginusername"
                    value={loginUser}
                    onChange={(e) => setLoginUser(e.target.value)}
                  />
                </div>

                <div className="login-password flex">
                  <span>Password</span>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="loginpassword"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>

                <div className="forgotPasswordSignup">
                  <div className="forgotPassword">
                    Forgot Password <i className="fa-solid fa-question questionMark"></i>
                  </div>
                  <div className="signup" onClick={() => navigate("/signup")}>
                    Signup
                  </div>
                </div>

                <div className="submission flex">
                  <button
                    className="submitting-login"
                    type="submit"
                    onClick={handleSubmitBtn}
                    // disabled={loginUser.trim() === "" || loginPassword.trim() === ""}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </section>
        </div>
    </>
  )
}

export default Login
