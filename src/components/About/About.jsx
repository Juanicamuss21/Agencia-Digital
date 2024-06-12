import './About.css'
import imgAbout from '../../assets/Imagen diseño.webp'
import { FaCheck } from 'react-icons/fa6'

const About = () => {
  return (
    <section id='sobre-nosotros' className='about-section'>
        <h2>¿Quiénes somos?</h2>
          <div className='about-col'>

              <img className='img-about' src={imgAbout} alt="img" />

              <div className='description'>
                <p>
                    Somos una agencia dedicada a crear experiencias digitales impactantes que ayudan a nuestros clientes a destacarse en el mundo digital. Ya sea que necesites un sitio web atractivo, una tienda en línea funcional o una plataforma web personalizada, estamos aquí para hacer que tu visión cobre vida.
                </p>

                <div>
                  <p className='p-about'>Garantizamos:</p>
                  <ul className='ul-about'>
                      <li className='li-about'><FaCheck className='icon-check' />Calidad</li>
                      <li className='li-about'><FaCheck className='icon-check' />Compromiso</li>
                      <li className='li-about'><FaCheck className='icon-check' />Responsabilidad</li>
                  </ul>
                </div>

              </div>

          </div>
    </section>
  )
}

export default About
