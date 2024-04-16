import './Contact.css'
import iconoWpp from '../../assets/Icono-wpp.webp'
import iconoMail from '../../assets/Icono-gmail.webp'

const Contact = () => {
  return (
    <section id="contacto" className="section-contact">
      <div className='contact-container'>
        <div className='contact-text'>
          <h1 className='contact-title'>Contacto</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam inventore quisquam adipisci dicta veritatis.
            </p>
          <div className='icons'>
            <img src={iconoWpp} alt="wpp" />
            <img src={iconoMail} alt="mail" />
          </div>
        </div>
      </div>

      <form className='contact-form' action="">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <input type="email" placeholder="Email" />
        <textarea name="" id="" rows="10" placeholder='Mensaje...'></textarea>
        <button type="submit" className='btn-form'>Enviar</button>
      </form>
    </section>
  )
}

export default Contact
