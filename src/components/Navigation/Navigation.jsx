import { useState } from 'react'
import './Navigation.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import logo from '../../assets/Logo Devvision.png'

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

  const reload = () => {
    window.location.reload()
  }

  return (
    <header className='header-section'>

      <div className='menu-toggle' onClick={toggleMenu2}>
        <RxHamburgerMenu className='icon-menu' onClick={toggleMenu}/>
      </div>

      <div className='logo-section' >
        <img onClick={() => reload()} className='logo' src={logo} alt="logo"/>
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
