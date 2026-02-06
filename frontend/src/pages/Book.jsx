import React from 'react'
import ContactNav from '../components/navbars/ContactNav.jsx'
import NavBar from '../components/navbars/NavBar.jsx'
import styles from './Book.module.css'
import Heading from '../components/heading/Heading.jsx'
import BookForm from '../components/book/BookForm.jsx'
import Footer from '../components/Footer/Footer.jsx'
export default function Book() {
  return (
    <div className={styles.main}>
        <ContactNav />
        <NavBar />
        <div className={styles.content}>
        <div className={styles.book}>
          <div className={styles.head}>
            <Heading heading="Book A Table" details="We consider all the drivers of change gives you the components you need to change to create a truly happens." />
          </div>
          <BookForm />
        </div>
      </div>

      <div className={styles.map}>
      </div>
      <Footer/>
    </div>
  )
}
