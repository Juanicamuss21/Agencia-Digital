import './About.css'
// import { FaCheck } from 'react-icons/fa6'
// import imgAbout from '../../assets/Imagen diseño.webp'
import imgAbout from '../../assets/Image Section About.webp'
import icon1 from '../../assets/number-1-1.svg'
import icon2 from '../../assets/number-2-1.svg'
import icon3 from '../../assets/number-3-1.svg'

const About = () => {
  return (
    <section id='sobre-nosotros' className='about-section'>

      <div className='about-section-title'>
        <h2>No impidas que tu negocio cuente con los beneficios de un sitio web</h2>
        <p>
          Identifica las barreras que te impiden crecer y descubre cómo mis servicios pueden solucionarlas.
        </p>
      </div>

          <div className='about-col'>
              <img className='img-about' src={imgAbout} alt="img" />

              <div className='description'>
                <div>
                  <img className='icon-about' src={icon1} alt="" />
                  <h3>Mayor Visibilidad y Alcance</h3>
                </div>

                <p>Una página web permite llegar a un público más amplio.</p>

                <div>
                  <img className='icon-about' src={icon2} alt="" />
                  <h3>Credibilidad y Profesionalismo</h3>
                </div>

                <p>Establece credibilidad y confianza con los clientes o pacientes</p>

                <div>
                  <img className='icon-about' src={icon3} alt="" />
                  <h3>Disponibilidad y Conveniencia</h3>
                </div>

                <p>permite a los usuarios acceder a información sobre tus servicios, productos, horarios y formas de contacto en cualquier momento.</p>

              </div>

          </div>
    </section>
  )
}

export default About
