import './About.css'
import imgAbout from '../../assets/Imagen (1).png'
// import imgAbout from '../../assets/Image-about.jpeg'
// import rectangulo from '../../assets/Rectangulo.png'
// import rectangulo2 from '../../assets/Rectangulo-2.png'

const About = () => {
  return (
    <section id='sobre-nosotros' className='about-section'>
        <div className='about-col-1'>
            <div className='about-text'>
              <h1>Sobre Nosotros</h1>

              <p>
                Somos una agencia dedicada a crear experiencias digitales impactantes que ayudan a nuestros clientes a destacarse en el mundo digital. Ya sea que necesites un sitio web atractivo, una tienda en línea funcional o una plataforma web personalizada, estamos aquí para hacer que tu visión cobre vida.
              </p>
              <p>
                Cum adipisci optio magni veritatis pariatur debitis illum in? Quidem maxime perspiciatis quo adipisci vero accusantium iure consequatur, laborum eum doloremque nesciunt ut rerum corrupti rem quis cumque? Illo, quasi!
              </p>
            </div>
        </div>

        <div className='section-col-2'>
            <img className='img-about' src={imgAbout} alt="img" />
            {/* <img className='rectangle-1' src={rectangulo} alt="rectangulo" />
            <img className='rectangle-2' src={rectangulo2} alt="rectangulo-2" /> */}
        </div>
    </section>
  )
}

export default About
