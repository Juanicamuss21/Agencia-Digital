import './About.css'
import imgAbout from '../../assets/Image-about.jpeg'

const About = () => {
  return (
    <section className='about-section'>
        <div className='about-col-1'>
            <div className='about-text'>
              <h1>Sobre Nosotros</h1>

              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit ea voluptatibus magni quas amet repellendus ducimus labore explicabo sint, culpa ipsam, iste neque, quaerat quis illo cum debitis corrupti!
                  Adipisci velit quod excepturi minima aliquid, est ratione dolores, eligendi repudiandae laboriosam, itaque maiores iusto. Delectus pariatur odit labore et laborum accusantium eius quam perspiciatis omnis. A eius tempora corporis?
                  Cum adipisci optio magni veritatis pariatur debitis illum in? Quidem maxime perspiciatis quo adipisci vero accusantium iure consequatur, laborum eum doloremque nesciunt ut rerum corrupti rem quis cumque? Illo, quasi!
              </p>
            </div>
        </div>

        <div className='section-col-2'>
            <img className='img-about' src={imgAbout} alt="img" />
        </div>
    </section>
  )
}

export default About
