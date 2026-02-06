import React from 'react'
import styles from './MenuItems.module.css'
import MenuCard from './MenuCard'
import {items} from './CardData.js'
export default function MenuItems() {
  return (
    <div className={styles.container}>
      {items.map((card,id) =>(
        // console.log(card.src)
        <MenuCard key={id} price={card.price} name={card.name} image={card.src} ingriedents={card.ingriedents}/>
      ))}
      {console.log(items)}
      {/* <MenuCard price="$9.99" name="Fried Eggs" ingriedents="Made with eggs, lettuce, salt, oil and other ingredients." />
      <MenuCard price="$9.99" name="Fried Eggs" ingriedents="Made with eggs, lettuce, salt, oil and other ingredients." />*/}
    </div>
  )
}
