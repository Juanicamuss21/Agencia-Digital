import { useState } from 'react'
import './Navigation.css'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleMenu2 = () => {
    if (menuOpen) {
      setMenuOpen(false)
    }
  }

  return (
    <header className='header-section'>
      <div className='menu-toggle' onClick={toggleMenu2}>
        <RxHamburgerMenu className='icon-menu' onClick={toggleMenu}/>
      </div>
      <nav className={`nav-section ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={toggleMenu}>Inicio</a>
        <a href="#sobre-nosotros" onClick={toggleMenu}>Sobre Nosotros</a>
        <a href="#servicios" onClick={toggleMenu}>Servicios</a>
        {/* <a href="#proyectos" onClick={toggleMenu}>Proyectos</a> */}
        {/* <a href="#preguntas-frecuentes" onClick={toggleMenu}>Preguntas Frecuentes</a> */}
        <a href="#contacto" onClick={toggleMenu}>Contacto</a>
      </nav>
    </header>
  )
}

export default Navigation
