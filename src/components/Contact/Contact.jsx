import './Contact.css'
import iconoWpp from '../../assets/Icono-wpp.webp'
import iconoMail from '../../assets/Icono-gmail.webp'
import emailjs from 'emailjs-com'
import { toast, Toaster } from 'react-hot-toast'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_vumsxww', 'template_o6zq5pf', form.current, '4U9cfwaK154485vNs')
      .then((result) => {
        toast.success('Mensaje enviado')
      }, (error) => {
        toast.error(error.text)
      })

    e.target.reset()
  }

  return (
    <section id="contacto" className="section-contact">
      <div className='contact-container'>
        <h2 className='contact-title'>Contacto</h2>
        <p>Ante cualquier duda, ¡no dudes en contactarnos!</p>
      </div>

      <div className='contact-form'>

        <div className='col-form'>
          <form className='form' ref={form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <input type="text" placeholder="Nombre" name="from_name"/>
            <label>Email</label>
            <input type="email" placeholder="Email" name="email"/>
            <label>Mensaje</label>
            <textarea name="message" id="message" rows="10" placeholder='Mensaje...'></textarea>
            <button type="submit" className='btn-form' value='Send'>Enviar</button>
          </form>
        </div>

        <div className='contenedor-azul'></div>

        <div className='contenedor-gris'>
          <h2>Otros medios</h2>

          <div className='redes'>
            <a href="https://api.whatsapp.com/send?phone=+5493854353077&text=Hola, me gustaría hacer una consulta!" target="_blank" rel='noreferrer'>
             <img src={iconoWpp} alt="wpp" />
            </a>

            <a href="https://api.whatsapp.com/send?phone=+5493854353077&text=Hola, me gustaría hacer una consulta!" target="_blank" rel='noreferrer'>
             Enviar Whatsapp
            </a>
          </div>

          <div className='redes'>
            <a href="mailto:juanicamuss15@gmail.com" target="_blank" rel='noreferrer'>
             <img src={iconoMail} alt="mail" />
            </a>

            <a href="https://api.whatsapp.com/send?phone=+5493854353077&text=Hola, me gustaría hacer una consulta!" target="_blank" rel='noreferrer'>
             Enviar Gmail
            </a>
          </div>
        </div>

      </div>

      <Toaster
                position='bottom-right'
                reverseOrder={true}
                toastOptions={{
                  className: '',
                  duration: 3000,
                  style: {
                    background: '#363636',
                    color: 'white',
                    fontSize: '15px'
                  }
                }}
              />
    </section>
  )
}

export default Contact
