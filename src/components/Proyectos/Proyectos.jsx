import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import './Proyectos.css'
import MockupClinica from '../../assets/Mockup-Clinica.webp'
import FullImageClinica from '../../assets/Clinica Dental Full Image.webp'
import MockupOdontologia1 from '../../assets/Mockup Odontologia1.webp'
import FullImageOdontologia1 from '../../assets/Odontologia 1 Full Image.webp'
import MockupOdontologia2 from '../../assets/Mockup Odontologia2.webp'
import FullImageOdontologia2 from '../../assets/Odontologia 2 Full Image.webp'
import MockupTickets from '../../assets/Mockup Tickets.webp'
import FullImageTickets from '../../assets/Tickets Full Image.webp'
import MockupTiendaViniles from '../../assets/Mockup Tienda Viniles.webp'
import FullImageTiendaViniles from '../../assets/Tienda Viniles Full Image.webp'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { FaCheckCircle } from 'react-icons/fa'

const PROYECTOS = [
  {
    title: 'Clinica Médica',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque, sequi quas dignissimos et provident doloribus consequuntur sunt dolores fuga? Reiciendis ipsam quis.',
    img: MockupClinica,
    fullImage: FullImageClinica
  },
  {
    title: 'Clinica Dental',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque, sequi quas dignissimos et provident doloribus consequuntur sunt dolores fuga? Reiciendis ipsam quis.',
    img: MockupOdontologia1,
    fullImage: FullImageOdontologia1
  },
  {
    title: 'Clinica Dental 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque, sequi quas dignissimos et provident doloribus consequuntur sunt dolores fuga? Reiciendis ipsam quis.',
    img: MockupOdontologia2,
    fullImage: FullImageOdontologia2
  },
  {
    title: 'Ticketera de Eventos',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque, sequi quas dignissimos et provident doloribus consequuntur sunt dolores fuga? Reiciendis ipsam quis.',
    img: MockupTickets,
    fullImage: FullImageTickets
  },
  {
    title: 'Tienda Viniles',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque, sequi quas dignissimos et provident doloribus consequuntur sunt dolores fuga? Reiciendis ipsam quis.',
    img: MockupTiendaViniles,
    fullImage: FullImageTiendaViniles
  }
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }

  ]
}

Modal.setAppElement('#root')

const Proyectos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState('')
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const openModal = (image) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id='proyectos' className='proyectos-section'>
      <div className='proyectos-section-title'>
          <h2>Descubre nuestros diseños más recientes</h2>
        <p>
          Te invitamos a conocer algunos de los proyectos más destacados en los que hemos participado con nuestros clientes. Explora nuestra cartera y descubre lo que podemos lograr juntos.
        </p>
      </div>

        <Slider {...settings} className='proyectos'>
          {PROYECTOS.map((proyecto, index) => (
            <article className={`proyectos-card proyecto-${index}`} key={index}>
              <h3>{proyecto.title}</h3>
              <img className='proyectos-img' src={proyecto.img} alt='img' />
                <button className='btn-proyecto' onClick={() => openModal(proyecto.fullImage)}>Ver diseño completo</button>
            </article>
          ))}
        </Slider>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Imagen Completa'
        className='modal-content'
        overlayClassName='modal-overlay'
      >
        <button className='close-button' onClick={closeModal}>
          &times;
        </button>
        <img src={selectedImage} alt='Full Image' className='full-image' />
      </Modal>
    </section>
  )
}

export default Proyectos
