import { useState } from 'react'
import './Accordion.css'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const preguntas = [
    {
      pregunta: '¿Cuál es el objetivo de tu compañía?',
      respuesta: 'Nuestro objetivo es brindar soluciones tecnológicas innovadoras y de alta calidad para satisfacer las necesidades de nuestros clientes.'
    },
    {
      pregunta: '¿Qué servicios ofrecen?',
      respuesta: 'Ofrecemos servicios de desarrollo web, diseño de interfaces de usuario, consultoría en tecnología y soporte técnico.'
    },
    {
      pregunta: '¿Cómo se garantiza la calidad de sus productos?',
      respuesta: 'Contamos con un equipo de expertos altamente capacitados y seguimos las mejores prácticas de la industria. Además, realizamos pruebas exhaustivas antes de entregar nuestros productos.'
    },
    {
      pregunta: '¿Cuáles son sus políticas de privacidad y seguridad?',
      respuesta: 'Nos tomamos muy en serio la privacidad y seguridad de nuestros clientes. Cumplimos con todas las regulaciones y estándares de seguridad aplicables, y protegemos los datos de nuestros clientes utilizando cifrado y otras medidas de seguridad.'
    }
  ]

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }

  return (
    <section id='preguntas-frecuentes' className="faq-section">
      <h1 className='faq-title'>Preguntas Frecuentes</h1>
      <div className="accordion-container">
        {preguntas.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => handleClick(index)}>
              <h3>{item.pregunta}</h3>
              <span>{activeIndex === index ? <CiCircleMinus className='minus-icon'/> : <CiCirclePlus className='plus-icon'/>}</span>
            </div>
            {activeIndex === index && <div className="accordion-body">{item.respuesta}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Accordion
