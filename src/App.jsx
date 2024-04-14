import './App.css'
import Home from './components/Home/Home'
// import About from './components/About/About'
import Navigation from './components/Navigation/Navigation'
import WhyUs from './components/Why Us/WhyUs'
import Services from './components/Services/Services'
import Proyectos from './components/Proyectos/Proyectos'
import Accordion from './components/Accordion/Accordion'
import Footer from './components/Footer/Footer'
// import Contact from './components/Contacto/Contact'

function App () {
  return (
    <>
      <Navigation />
      <Home />
      <WhyUs />
      <Services />
      <Proyectos />
      <Accordion />
      <Footer />
      {/* <Contact /> */}
      {/* <About /> */}
    </>
  )
}

export default App
