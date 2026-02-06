import React from 'react'
import styles from './Heading.module.css'
export default function Heading({heading="", details=""}) {
    return (
        <div className={styles.hcont}>
            <div className={styles.hm}>
                <h1 className={styles.headingm}>{heading}</h1>
            </div>

            <div className={styles.ht}>
                <p className={styles.headingt}>{details}</p>       
            </div>
        </div>
    )
}
