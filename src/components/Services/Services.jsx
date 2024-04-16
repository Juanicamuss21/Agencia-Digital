import './Services.css'
import { HiMiniPaintBrush } from 'react-icons/hi2'
import { DiAptana } from 'react-icons/di'
import { FaCode } from 'react-icons/fa6'

const servicesData = [
  {
    icon: <HiMiniPaintBrush className="icon" />,
    title: 'Diseño Web',
    description: 'Creamos diseños web atractivos y funcionales que reflejan la esencia de tu marca y cautivan a tu audiencia.',
    className: 'design'
  },
  {
    icon: <FaCode className="icon" />,
    title: 'Desarrollo Web',
    description: 'Nuestro equipo de desarrollo web utiliza las últimas tecnologías y prácticas recomendadas para crear sitios web rápidos, seguros y totalmente receptivos.',
    className: 'development'
  },
  {
    icon: <DiAptana className="icon" />,
    title: 'Mantenimiento',
    description: 'Nos encargamos de mantener tu sitio actualizado y seguro para que puedas centrarte en hacer crecer tu negocio.',
    className: 'maintenance'
  }
]

const Services = () => {
  return (
    <section id="servicios" className="services-section">
      <div className='services-text'>
        <h1 className='services-title'>Servicios</h1>
        <p>Descubre cómo nuestros servicios pueden ayudarte a alcanzar tus metas!</p>
      </div>

        <div className="services-cards">
          {servicesData.map((service, index) => (
            <article key={index} className={`article-card ${service.className}`}>
              <div className={`icon-${service.className}`}>
                {service.icon}
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <a href="#contacto" className={`btn-${service.className}`}>Contactanos</a>
            </article>
          ))}
        </div>

    </section>
  )
}

export default Services
