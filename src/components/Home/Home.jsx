import './Home.css'
// import imgDesign from '../../assets/Frame (4).webp'
import imgDesign from '../../assets/Frame (5).png'
import Phone1 from '../../assets/Phone1.png'
import Phone2 from '../../assets/Phone2.png'
import Phone3 from '../../assets/Phone3.png'
import Phone4 from '../../assets/Phone4.png'
import Phone5 from '../../assets/Phone5.png'

// const Navegar

const Home = () => {
  return (
        <section id='inicio' className='home-section'>
            <div className='capa-dark'></div>
            <div className='col-1'>

                <div className='section-text'>
                    <h1 className='title-home'>
                        Desarrollamos <br className='br-home'/> tu <p>sitio web!</p>
                    </h1>
                    <p className='title-description'>
                        ¡Impulsa tu presencia en línea con nuestra agencia de desarrollo web!
                    </p>

                    <a href="#contacto" className='btn-home'>
                        Contactanos
                    </a>
                </div>
            </div>

            <div className='section-imagen'>
                <img className='phone-1' src={Phone1} alt="Iphone mostrando imagen de proyecto"/>
                <img className='phone-2' src={Phone2} alt="Iphone mostrando imagen de proyecto"/>
                <img className='phone-3' src={Phone3} alt="Iphone mostrando imagen de proyecto"/>
                <img className='phone-4' src={Phone4} alt="Iphone mostrando imagen de proyecto"/>
                <img className='phone-5' src={Phone5} alt="Iphone mostrando imagen de proyecto"/>
                <img className='img-section' src={imgDesign} alt="img" />
            </div>
        </section>
  )
}

export default Home
