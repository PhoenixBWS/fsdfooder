import React from 'react'
import styles from './Heading.module.css'
export default function Heading({heading="", details=""}) {
    return (
        <div className={styles.hcont}>
            <h1 className={styles.headingm}>{heading}</h1>
            <p className={styles.headingt}>{details}</p>
        </div>
    )
}
