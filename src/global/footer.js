import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css";

const footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-content">
            <div className="footer-section">
                <div className='titulo-footer'>Acerca de Nosotros</div>
                <div>Granero la economía del norte</div>
                <div>NIT: 1002958486-6</div>
                
            </div>
            <div className="footer-section">
                <div className='titulo-footer'>Enlaces Rápidos</div>
                <Link to="/">Home</Link>
            </div>
            <div className="footer-section">
                <div className='titulo-footer'>Contacto</div>
                <div>Celular: 3128808853</div>
            </div>
        </div>
        <div>Todos los derechos reservados &copy; 2024</div>
    </div>
  )
}

export default footer