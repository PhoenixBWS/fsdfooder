import React from 'react'
import styles from './MenuButton.module.css'
export default function MenuButton({btnTxt="",style="",handler =()=>{}}){
    return (
        <>
            <button className={`${styles.btn} ${style}`} onClick={handler}>{btnTxt || "Submit"}</button>
        </>
    )
}
