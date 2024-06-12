import './Services.css'
import { HiMiniPaintBrush } from 'react-icons/hi2'
import { DiAptana } from 'react-icons/di'
import { FaCode } from 'react-icons/fa6'
// import imgdiseño from '../../assets/Imagen-diseño.jpg'
// import imgdesarrollo from '../../assets/Imagen-desarrollo.jpg'
// import imgmantenimiento from '../../assets/Imagen-mantenimiento.jpg'
import { FaCheckCircle } from 'react-icons/fa'

const servicesData = [
  {
    icon: <HiMiniPaintBrush className="icon" />,
    // img: imgdiseño,
    title: 'Diseño Web',
    description: 'Creamos diseños web atractivos y funcionales que reflejan la esencia de tu marca y cautivan a tu audiencia.',
    services: ['Diseño a medida', 'Atractivas', 'Multiplataforma'],
    className: 'design'
  },
  {
    icon: <FaCode className="icon" />,
    // img: imgdesarrollo,
    title: 'Desarrollo Web',
    description: 'Nuestro equipo de desarrollo web utiliza las últimas tecnologías y prácticas recomendadas para crear sitios web rápidos, seguros y totalmente receptivos.',
    services: ['Landing page', 'Tienda online', 'Redes sociales', 'Formulario de contacto'],
    className: 'development'
  },
  {
    icon: <DiAptana className="icon" />,
    // img: imgmantenimiento,
    title: 'Mantenimiento',
    description: 'Nos encargamos de mantener tu sitio actualizado y seguro para que puedas centrarte en hacer crecer tu negocio.',
    services: ['Soporte', 'Actualización', 'Seguridad', 'Mantenimiento'],
    className: 'maintenance'
  }
]

const Services = () => {
  return (
    <section id="servicios" className="services-section">
      <div className='services-text'>
        <h2 className='services-title'>Nuestros Servicios</h2>
        <p>Descubre cómo nuestros servicios pueden ayudarte a alcanzar tus metas!</p>
      </div>

        <div className="services-cards">
          {servicesData.map((service, index) => (
            <article key={index} className={`article-card ${service.className}`}>
              <div className={`icon-${service.className}`}>
                {service.icon}
              </div>
              <div className='card-text'>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <ul className='ul-services'>
                  {service.services.map((service, index) => (
                    <li className='li-services' key={index}>
                      <FaCheckCircle className='icon-check' />
                      {service}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className={`btn-${service.className}`}>Contactanos</a>
              </div>
            </article>
          ))}
        </div>

    </section>
  )
}

export default Services
