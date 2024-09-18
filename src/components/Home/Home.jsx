import './Home.css'
// import Hero from '../../assets/Hero-image.webp'
import Hero from '../../assets/ImagenHero.jpeg'
import { ArrowIconRight } from '../../Icons'

const Home = () => {
  return (
      <section id='inicio' className='home-section'>
            <img className='img-section' src={Hero} alt="img" />

            <div className='capa-blue'></div>
            <div className='col-1'>

                <div className='section-text'>
                    <div className='title-home'>
                        <h1>Impulsa tu negocio con un sitio web profesional con los mejores precios.
                        </h1>
                    </div>
                    <p className='title-description'>
                    Sitios web personalizados, optimizados y accesibles. Potencia tu presencia online con precios que se ajustan a tu bolsillo.
                    </p>

                    <a href="#contacto" className='btn-home'>
                        QUIERO HACER UNA CONSULTA
                        <ArrowIconRight />
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
