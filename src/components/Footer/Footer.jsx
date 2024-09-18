// import React from 'react'
import './Footer.css' // Importamos los estilos CSS

const Footer = () => {
  return (
    <footer id="footer" className="footer">

      <div className="footer-sections">
       <a href="#inicio">Inicio</a>
        <a href="#beneficios">Beneficios</a>
        <a href="#servicios">Servicios</a>
        <a href="#contacto">Contacto</a>
      </div>

      <div className="footer-contact">
        <h3>Contacto</h3>
        <p>Correo: juanicamuss15@gmail.com</p>
        <p>Teléfono: (+54) 385-435-3077</p>
      </div>

    </footer>
  )
}

export default Footer
