import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';
import "./header.css";

const header = (props) => {
    return (
        <div className='header-container'>
            <div className="header-titulo-container">
                <div className="header-titulo">{props.titulo}</div>
                <NavLink to="/"> 
                    <img className="header-logo-titulo" src={logo} alt="Logo FIT"></img>
                </NavLink>
            </div>
            { props.subtitulo ? <div className='header-subtitulo'>{props.subtitulo}</div> : null }
        </div>
    )
}

export default header