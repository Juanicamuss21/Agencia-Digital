// import React from 'react'
import './Footer.css' // Importamos los estilos CSS

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h3>Sección 1</h3>
          <ul>
            <li><a href="#seccion1">Enlace 1</a></li>
            <li><a href="#seccion2">Enlace 2</a></li>
            <li><a href="#seccion3">Enlace 3</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Sección 2</h3>
          <ul>
            <li><a href="#seccion4">Enlace 4</a></li>
            <li><a href="#seccion5">Enlace 5</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Sección 3</h3>
          <ul>
            <li><a href="#seccion6">Enlace 6</a></li>
            <li><a href="#seccion7">Enlace 7</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <h3>Contacto</h3>
        <p>Correo: example@example.com</p>
        <p>Teléfono: 123-456-7890</p>
      </div>
    </footer>
  )
}

export default Footer
