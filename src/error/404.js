import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.css'
import logo from '../img/logo.png'

const E404 = () => {
  return (
    <div className='container-404' >
        <div className='setStyle2'>
            <h1> 404 Error page </h1>
            <div> Sorry, This page doesn't exist </div>
            <NavLink className='link-home-container' to="/"> 
                Go home
                <img className="logo" src={logo} alt="Logo FIT"></img>
            </NavLink>
        </div>
    </div>
  )
}

export default E404