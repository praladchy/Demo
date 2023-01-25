import React from 'react'
import { NavLink } from 'react-router-dom'
import Lable from '../../Lable/Lable'
import './Login.css'
const About = () => {


  return (
    <div>
      <div className='Login-main-Container'>
        <h2><Lable Lable='Login'/></h2>
        <div className='Login-Container'>
          <div className='Login-UserName-Container'>
            <h4><Lable Lable='UserName' /></h4>
            <input type="text,email" placeholder='UserName or Email' />
          </div>
          <div className='Login-Password-Container'>
            <h4><Lable Lable='Password' /></h4>
            <input type="password" placeholder='Password' />
          </div>
          <div className='Login-Cancle-Button-container'>
            <div className='Login-button-Container'>
              <NavLink to="/"> <button>Login</button></NavLink>
            </div>
            <div className='Cancle-button-Container'>
              <NavLink to="/"><button>Cancle</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About