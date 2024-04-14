import { useRef } from 'react'
import './Contact.css'
// import { SiGmail } from 'react-icons/si'
// import { RiMessengerLine } from 'react-icons/ri'
// import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { toast, Toaster } from 'react-hot-toast'

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
    <section id='contact'>
      <h1>Contacto</h1>

      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor='name'>Nombre</label>
          <input type='text' name='name' required />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' required />
          <label htmlFor='message'>Mensaje</label>
          <textarea name='message' required />
          <input type='submit' value='Enviar' />
        </form>

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
