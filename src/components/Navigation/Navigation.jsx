import React, { useState } from 'react'
import './Navigation.css'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className='header-section'>
      <div className='menu-toggle' onClick={toggleMenu}>
        <RxHamburgerMenu className='icon-menu' />
      </div>
      <nav className={`nav-section ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio">Inicio</a>
        <a href="#sobre-tu-negocio">Sobre tu negocio</a>
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#preguntas-frecuentes">F&Q</a>
        <a href="#footer">Contacto</a>
      </nav>
    </header>
  )
}

export default Navigation
