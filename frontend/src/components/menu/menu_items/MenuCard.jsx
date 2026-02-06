import React from 'react'
import styles from './MenuCard.module.css'
export default function MenuCard({price="", name="", ingriedents="", image=""}) {
  return (
    <div className={styles.cont}>
      <img src={image} alt={name} />
      <ul className={styles.list}>
        <li className={styles.pr}><h3>{price}</h3></li>
        <li className={styles.na}>{name}</li>
        <li className={styles.in}>{ingriedents}</li>
      </ul>
    </div>
  )
}
