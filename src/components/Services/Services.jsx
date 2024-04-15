import './Services.css'
import { HiMiniPaintBrush } from 'react-icons/hi2'
import { DiAptana } from 'react-icons/di'
import { FaCode } from 'react-icons/fa6'

const servicesData = [
  {
    icon: <HiMiniPaintBrush className="icon" />,
    title: 'Diseño Web',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima dignissimos, veritatis totam aperiam autem.',
    className: 'design'
  },
  {
    icon: <FaCode className="icon" />,
    title: 'Desarrollo Web',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima dignissimos, veritatis totam aperiam autem.',
    className: 'development'
  },
  {
    icon: <DiAptana className="icon" />,
    title: 'Mantenimiento',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima dignissimos, veritatis totam aperiam autem.',
    className: 'maintenance'
  }
]

const Services = () => {
  return (
    <section id="servicios" className="services-section">
      <div className='services-text'>
        <h1 className='services-title'>Servicios</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

        <div className="services-cards">
          {servicesData.map((service, index) => (
            <article key={index} className={`article-card ${service.className}`}>
              <div className={`icon-${service.className}`}>
                {service.icon}
              </div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className={`btn-${service.className}`}>Ver más</button>
            </article>
          ))}
        </div>

    </section>
  )
}

export default Services
