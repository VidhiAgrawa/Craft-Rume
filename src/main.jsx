import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Aboutus from './Components/AboutUs/Aboutus.jsx'
import Signup from './Components/Login_Signup/Signup.jsx'
import Login from './Components/Login_Signup/Login.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/" element={<App/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
  </BrowserRouter>,
)
