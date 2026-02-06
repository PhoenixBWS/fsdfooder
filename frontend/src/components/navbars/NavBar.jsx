import React from 'react'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
export default function MenuBar() {
   const navigate = useNavigate();
    const handle = () => {
        navigate('/book');
    };
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logoimg}/>
        <p>Bistro Bliss</p>
      </div>
      
        <ul className={styles.list}>
          <li className={styles.item}><Link to="/">Home</Link></li>
          <li className={styles.item}><Link to="/about">About</Link></li>
          <li className={styles.item}><Link to="/menu">Menu</Link></li>
          <li className={styles.item}><Link to="/pages">Pages</Link></li>
          <li className={styles.item}><Link to="/contact">Contact</Link></li>
        </ul>
        <button className={styles.btn} onClick={handle}>Book A Table</button>
    </div>
  )
}
