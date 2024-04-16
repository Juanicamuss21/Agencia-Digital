import './About.css'
import imgAbout from '../../assets/Imagen-About.webp'

const About = () => {
  return (
    <section id='sobre-nosotros' className='about-section'>
        <div className='about-col-1'>
            <div className='about-text'>
              <h1>Sobre Nosotros</h1>

              <p>
                Somos una agencia dedicada a crear experiencias digitales impactantes que ayudan a nuestros clientes a destacarse en el mundo digital. Ya sea que necesites un sitio web atractivo, una tienda en línea funcional o una plataforma web personalizada, estamos aquí para hacer que tu visión cobre vida.
              </p>
              {/* <p>
              En nuestra agencia, creemos en la innovación, la creatividad y la atención al detalle. Nos esforzamos por entender las necesidades únicas de cada cliente y diseñar soluciones personalizadas que generen resultados tangibles.
              </p> */}
            </div>
        </div>

        <div className='section-col-2'>
            <img className='img-about' src={imgAbout} alt="img" />
        </div>
    </section>
  )
}

export default About
