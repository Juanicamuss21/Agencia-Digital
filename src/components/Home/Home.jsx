import './Home.css'
// import imgDesign from '../../assets/Frame (5).png'
// import Phone1 from '../../assets/Phone1.webp'
// import Phone2 from '../../assets/Phone2.webp'
// import Phone3 from '../../assets/Phone3.webp'
// import Phone4 from '../../assets/Phone4.webp'
// import Phone5 from '../../assets/Phone5.webp'
// import imgDesign from '../../assets/Diseño-portada.webp'
import Hero from '../../assets/Hero-image.webp'

const Home = () => {
  return (
      <section id='inicio' className='home-section'>
            <img className='img-section' src={Hero} alt="img" />

            <div className='capa-dark'></div>
            <div className='capa-blue'></div>
            <div className='col-1'>

                <div className='section-text'>
                    <div className='title-home'>
                        <h1>Desarrollamos tu sitio web</h1>
                        <h1>¡ahora mismo!</h1>
                    </div>
                    <p className='title-description'>
                        ¡Impulsá tu presencia en línea con nuestra agencia de desarrollo web!
                    </p>

                    <a href="#contacto" className='btn-home'>
                        CONTÁCTANOS
                    </a>
                </div>
            </div>

            {/* <div className='section-imagen'>
                <img className='phone-1' src={Phone1} alt="Iphone mostrando imagen de proyecto"/>
                <img className='phone-2' src={Phone2} alt="Iphone mostrando imagen de proyecto"/>
                <img className='phone-3' src={Phone3} alt="Iphone mostrando imagen de proyecto"/>
                <img className='phone-4' src={Phone4} alt="Iphone mostrando imagen de proyecto"/>
                <img className='phone-5' src={Phone5} alt="Iphone mostrando imagen de proyecto"/>
                <img className='img-section' src={imgDesign} alt="img" />
            </div> */}
        </section>
  )
}

export default Home
