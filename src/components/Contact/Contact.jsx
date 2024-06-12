import './Contact.css'
import iconoWpp from '../../assets/Icono-wpp.webp'
import iconoMail from '../../assets/Icono-gmail.webp'

const Contact = () => {
  return (
    <section id="contacto" className="section-contact">
      <div className='contact-container'>
        <h2 className='contact-title'>Contacto</h2>
        <p>Ante cualquier duda, ¡no dudes en contactarnos!</p>
      </div>

      <div className='contact-form'>

        <div className='col-form'>
          <form className='form' action="">
            <label htmlFor="">Nombre</label>
            <input type="text" placeholder="Nombre" />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Email" />
            <label htmlFor="">Mensaje</label>
            <textarea name="" id="" rows="10" placeholder='Mensaje...'></textarea>
            <button type="submit" className='btn-form'>Enviar</button>
          </form>
        </div>

        <div className='contenedor-azul'></div>

        <div className='contenedor-gris'>
          <h2>Nuestras redes</h2>

          <div className='redes'>
            <img src={iconoWpp} alt="wpp" />
            <p>+54 3854353077</p>
          </div>

          <div className='redes'>
            <img src={iconoMail} alt="mail" />
            <p>juanicamuss15@gmail.com</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
