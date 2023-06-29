import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import SKILLS from './components/skills/SKILLS'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <SKILLS/>
      {/* <Service/> */}
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
      <Footer/>
    </>
  )
}
