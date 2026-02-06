import React from 'react'
import styles from './MenuItems.module.css'
import MenuCard from './MenuCard'
import {items} from './CardData.js'
export default function MenuItems() {
  return (
    <div className={styles.container}>
      {items.map((card,id) =>(
        <MenuCard key={id} price={card.price} name={card.name} image={card.src} ingriedents={card.ingriedents}/>
      ))}
     </div>
  )
}
