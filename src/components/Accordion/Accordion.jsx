import { useState } from 'react'
import './Accordion.css'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const preguntas = [
    {
      pregunta: '¿Incluye hosting y dominio?',
      respuesta: 'Dependiendo del plan, ofrecemos opciones que incluyen hosting y dominio. Trabajamos con proveedores líderes en el mercado, que recomendamos a nuestros clientes.'
    },
    {
      pregunta: '¿Cuándo se realiza el pago?',
      respuesta: 'Cobramos el 50% al inicio del servicio y el 50% restante al finalizar el desarrollo.'
    },
    {
      pregunta: '¿Qué métodos de pago aceptamos?',
      respuesta: 'Aceptamos transferencias bancarias y PayPal, y estamos evaluando otras opciones como Payoneer o Hotmart.'
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
      <h2 className='faq-title'>Preguntas Frecuentes</h2>
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
