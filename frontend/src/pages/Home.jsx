import React from 'react'
import Buttons from '../components/Buttons/Buttons'
import Menu from '../components/Home/Menu'
import Brousermenu from '../components/Home/Brousermenu'
import Visitus from '../components/Home/Visitus'
import Uniqueservices from '../components/Home/Uniqueservices'
import Delevery from '../components/Home/Delevery'
import Customers from '../components/Home/Customers'
import BlogArticles from '../components/Home/BlogArticles'
import ContactNav from '../components/navbars/ContactNav.jsx'
import NavBar from '../components/navbars/NavBar.jsx'
import Footer from '../components/Footer/Footer.jsx'

export default function Home() {
  return (
    <div>
      <ContactNav />
      <NavBar />
      <Buttons />
      <Menu />
      <Brousermenu />
      <Visitus />
      <Uniqueservices />
      <Delevery />
      <Customers />
      <BlogArticles />
       <Footer />
    </div>
  )
}
