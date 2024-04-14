import './WhyUs.css'
// import { ArrowIcon } from '../../Icons'

const WhyUs = () => {
  return (
    <section id='sobre-tu-negocio' className='why-us-section'>
      <div className='why-us-col-1'>

        <div className='why-us-title'>
          <span className='arrow-icon'>&#x2192;</span>
          <h1>
            Por qué tu negocio necesita ser <p className='impulsado-word'>impulsado</p> en las <p className='redes-word'>redes</p>?
          </h1>
        </div>
      </div>

      <div className='why-us-col-2'>
        <div className='why-us-text'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur saepe eveniet dolorum, ratione provident, beatae mollitia quasi nostrum et exercitationem eum labore veritatis aliquid ab dignissimos ex debitis tempora vitae!
            Quo culpa magnam molestiae pariatur voluptatibus unde doloribus fuga. Vitae possimus eum nam, praesentium laboriosam voluptatem minima suscipit commodi, nulla voluptate accusamus? Vitae ab, ea hic iure neque facilis sint.
          </p>

          <button className='btn-why-us'>
            Contactanos
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
