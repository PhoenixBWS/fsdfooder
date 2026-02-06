import React from 'react'
import styles from './Menu.module.css'
import ContactNav from '../components/navbars/ContactNav.jsx'
import NavBar from '../components/navbars/NavBar.jsx'
import Heading from '../components/heading/Heading.jsx'
import MenuBar from '../components/menu/menu_bar/MenuBar.jsx'
import MenuItems from '../components/menu/menu_items/MenuItems.jsx'
import Order from '../components/menu/Order.jsx'
export default function Menu() {
    return (
        <div className={styles.main}>
            <ContactNav />
            <NavBar />
            <div className={styles.content}>
                <div className={styles.heading}>
                    <Heading heading='Our Menu' details='We consider all the drivers of change gives you the components you need to change to create a truly happens.' />
                    <MenuBar />
                </div>
                <div className={styles.mitems}>
                    <MenuItems />
                </div>
                    <Order />
            </div>
        </div>
    )
}
