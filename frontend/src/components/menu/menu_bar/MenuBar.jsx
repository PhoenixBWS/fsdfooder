import React, {useRef, useEffect} from 'react'
import styles from "./MenuBar.module.css"

export default function MenuBar({handler=()=>{}}) {
  const all= useRef(null)
   useEffect(() => {
      all.current.click();
    }, []);

  return (
     <ul className={styles.list}>
      <button className={`${styles.btn}`} autoFocus onClick={handler} ref={all}>{"All"}</button>
      <button className={`${styles.btn}`} onClick={handler}>{"Breakfast"}</button>
      <button className={`${styles.btn}`} onClick={handler}>{"Main Dishes"}</button>
      <button className={`${styles.btn}`} onClick={handler}>{"Drinks"}</button>
      <button className={`${styles.btn}`} onClick={handler}>{"Desserts"}</button>
    </ul> 
  )
}
