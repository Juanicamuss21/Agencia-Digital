import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import './Proyectos.css'
import MockupClinica from '../../assets/Mockup-Clinica.webp'
import MockupCourses from '../../assets/Mockup-Courses.webp'
import FullImageClinica from '../../assets/Full-Image-Clinica.webp'
import FullImageCourses from '../../assets/Full-Image-Courses.webp'
import Slider from 'react-slick'
// import { FaCheckCircle } from 'react-icons/fa'

const PROYECTOS = [
  {
    title: 'Proyecto 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque, sequi quas dignissimos et provident doloribus consequuntur sunt dolores fuga? Reiciendis ipsam quis.',
    img: MockupClinica,
    fullImage: FullImageClinica,
    lista: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    ]
  },
  {
    title: 'Proyecto 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque, sequi quas dignissimos et provident doloribus consequuntur sunt dolores fuga? Reiciendis ipsam quis.',
    img: MockupCourses,
    fullImage: FullImageCourses,
    lista: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    ]
  },
  {
    title: 'Proyecto 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque, sequi quas dignissimos et provident doloribus consequuntur sunt dolores fuga? Reiciendis ipsam quis.',
    img: MockupClinica,
    fullImage: FullImageClinica,
    lista: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    ]
  },
  {
    title: 'Proyecto 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cumque, sequi quas dignissimos et provident doloribus consequuntur sunt dolores fuga? Reiciendis ipsam quis.',
    img: MockupClinica,
    fullImage: FullImageClinica,
    lista: [
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    ]
  }

]

const settings = {
  dots: false,
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

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
      <div className='proyectos-text'>
        <div className='proyectos-title'>
          <h1>Nuestros últimos proyectos</h1>
        </div>
        <p className='proyectos-description'>
          Te invitamos a conocer algunos de los proyectos más destacados en los que hemos participado con nuestros clientes. Explora nuestra cartera y descubre lo que podemos lograr juntos.
        </p>
      </div>

      {windowWidth < 768
        ? (
        <div className='proyectos'>
          {PROYECTOS.map((proyecto, index) => (
            <article className={`proyectos-card proyecto-${index}`} key={index}>
              <h2>{proyecto.title}</h2>
              <img className='proyectos-img' src={proyecto.img} alt='img' />
              <div className='btns-proyectos'>
                <button onClick={() => openModal(proyecto.fullImage)}>Ver más</button>
                <button>Descripción</button>
              </div>
            </article>
          ))}
        </div>
          )
        : (
        <Slider {...settings} className='proyectos'>
          {PROYECTOS.map((proyecto, index) => (
            <article className={`proyectos-card proyecto-${index}`} key={index}>
              <h2>{proyecto.title}</h2>
              <img className='proyectos-img' src={proyecto.img} alt='img' />
              <div className='btns-proyectos'>
                <button onClick={() => openModal(proyecto.fullImage)}>Ver más</button>
                <button>Descripción</button>
              </div>
            </article>
          ))}
        </Slider>
          )}

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
