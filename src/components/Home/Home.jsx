import './Home.css'
// import imgDesign from '../../assets/Frame.png'
import imgDesign from '../../assets/Frame (4).webp'

const Home = () => {
  return (
        <section id='inicio' className='home-section'>
            <div className='col-1'>

                <div className='section-text'>
                    <h1 className='title-home'>
                        Desarrollamos <br/> tu <p>sitio web!</p>
                    </h1>
                    <p className='title-description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, placeat ipsam corrupti earum hic reprehenderit quia pariatur nobis omnis sint ad perspiciatis sunt animi dolorum velit nam explicabo sit id.
                    </p>

                    <button className='btn-home'>
                        Contactanos
                    </button>
                </div>
            </div>

            <div className=''>
                <img className='img-section' src={imgDesign} alt="img" />
            </div>
        </section>
  )
}

export default Home
