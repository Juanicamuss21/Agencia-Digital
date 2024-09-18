import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
// import Navigation from './components/Navigation/Navigation'
// import WhyUs from './components/Why Us/WhyUs'
import Services from './components/Services/Services'
import Proyectos from './components/Proyectos/Proyectos'
import Accordion from './components/Accordion/Accordion'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <>
      {/* <Navigation /> */}
      <Home />
      <About />
      {/* <WhyUs /> */}
      <Services />
      <Proyectos />
      <Accordion />
      <Contact />
      <Footer />
    </>
  )
}

export default App
