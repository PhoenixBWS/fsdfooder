import React from 'react'
import styles from './Order.module.css'
import uber from '../../assets/menu_ico/order_ico/uber.png'
import grub from '../../assets/menu_ico/order_ico/grub.png'
import post from '../../assets/menu_ico/order_ico/post.png'
import door from '../../assets/menu_ico/order_ico/door.png'
import food from '../../assets/menu_ico/order_ico/food.png'
import deliver from '../../assets/menu_ico/order_ico/deliver.png'
import insta from '../../assets/menu_ico/order_ico/insta.png'
import just from '../../assets/menu_ico/order_ico/just.png'
import didi from '../../assets/menu_ico/order_ico/didi.png'
export default function Order() {
    return (
        <div className={styles.cont}>
            <div className={styles.abc}>
                <div className={styles.head}>
                    <h2>You can order through apps</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
                </div>

                <div className={styles.imcont}>
                    <div className={styles.box1}>
                        <img src={uber} alt="uber" className={styles.ims} />
                        <img src={grub} alt="grub" className={styles.ims} />
                        <img src={post} alt="post" className={styles.ims} />
                    </div>

                    <div className={styles.box2}>
                        <img src={door} alt="uber" className={styles.ims} />
                        <img src={food} alt="grub" className={styles.ims} />
                        <img src={deliver} alt="post" className={styles.ims} />
                    </div>

                    <div className={styles.box1}>
                        <img src={insta} alt="uber" className={styles.ims} />
                        <img src={just} alt="grub" className={styles.ims} />
                        <img src={didi} alt="post" className={styles.ims} />
                    </div>
                </div>
            </div>

        </div>
    )
}
