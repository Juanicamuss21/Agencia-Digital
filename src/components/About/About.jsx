import './About.css'
import imgAbout from '../../assets/Imagen (1).png'
// import imgAbout from '../../assets/Image-about.jpeg'
// import rectangulo from '../../assets/Rectangulo.png'
// import rectangulo2 from '../../assets/Rectangulo-2.png'

const About = () => {
  return (
    <section className='about-section'>
        <div className='about-col-1'>
            <div className='about-text'>
              <h1>Sobre Nosotros</h1>

              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit ea voluptatibus magni quas amet repellendus ducimus labore explicabo sint, culpa ipsam, iste neque, quaerat quis illo cum debitis corrupti!
                  Adipisci velit quod excepturi minima aliquid, est ratione dolores. eligendi repudiandae laboriosam, itaque maiores iusto. Delectus pariatur odit labore et laborum accusantium eius quam perspiciatis omnis. A eius tempora corporis?
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
