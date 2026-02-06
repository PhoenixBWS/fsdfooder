import React from 'react'
import styles from "./MenuBar.module.css"
import MenuButton from '../../buttons/MenuButton.jsx'
let mystyle={
  backgroundColor: "#AD343E"
}
export default function MenuBar() {
  return (
     <ul className={styles.list}>
        <li><MenuButton btnTxt="All" style={mystyle}/></li>
        <li><MenuButton btnTxt="Breakfast" /></li>
        <li><MenuButton btnTxt="Main Dishes" /></li>
        <li><MenuButton btnTxt="Drinks" /></li>
        <li><MenuButton btnTxt="Desserts" /></li>
    </ul> 
  )
}
