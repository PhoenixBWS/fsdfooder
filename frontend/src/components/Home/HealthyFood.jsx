import styles from './HealthyFood.module.css';
import ButtonLink2 from '../Buttons/ButtonLink2';

import phoneIco from '../../assets/contact_ico/phone.png';
import mailIco from '../../assets/contact_ico/mail.png';
import locationIco from '../../assets/contact_ico/location.png';

const HealthyFood = ({image}) => {
    return(
        <div className={styles.FlexEQ2}>
            <div className={styles.visit}>
                <figure>
                    <img src={image} alt='Visit Us' />
                </figure>
                <div className={styles.come}>
                    <h3>Come and visit us</h3>
                    <div className={styles.comeFlex}>
                        <div>
                            <figure>
                                <img src={phoneIco} alt="Phone" />
                            </figure>
                            <p>
                                <a href="tel:(414)857-0107">(414) 857-0107</a>
                            </p>
                        </div>
                        <div>
                            <figure>
                                <img src={mailIco} alt="Email" />
                            </figure>
                            <p>
                                <a href="mailto:happytummy@restaurant.com">happytummy@restaurant.com</a>
                            </p>
                        </div>
                        <div>
                            <figure>
                                <img src={locationIco} className={styles.invert} alt="Address" />
                            </figure>
                            <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className={`${styles.serif} ${styles.sectH2}`}>We provide healthy food for your family.</h2>
                <div className={styles.VisitFood}>
                    <h4>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h4>
                    <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                </div>
                <div className={styles.healthyButton}>
                    <ButtonLink2 href="#" text="More About Us" />
                </div>
            </div>
        </div>
    );
}

export default HealthyFood;