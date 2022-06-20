import React from 'react';
import About from './component/About/About.jsx';
import Contact from './component/Contact/Contact.jsx';
import Experience from './component/Experience/Experience.jsx';
import Footer from './component/footer/Footer.jsx';
import Header from './component/header/Header.jsx';
import Nav from './component/nav/Nav.jsx';
import Portfolio from './component/portfolio/Portfolio.jsx';
import Services from './component/services/Services.jsx';
// import Testimonial from './component/testimonial/Testimonial.jsx';

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App