import React from 'react'
import Visitus from '../components/About/Visit'
import Play from "../components/About/Play"
import Value from '../components/About/Value'
import Customers from '../components/About/Customers'
import ContactNav from '../components/navbars/ContactNav.jsx'
import NavBar from '../components/navbars/NavBar.jsx'
import Footer from '../components/Footer/Footer.jsx'
 
export default function About() {
  return (
    <div>
      <ContactNav />
      <NavBar />
      <Visitus/>
      <Play/>
      <Value/>
      <Customers/>
      <Footer />
    </div>
  )
}
