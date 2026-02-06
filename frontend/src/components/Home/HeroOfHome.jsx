import styles from './HeroOfHome.module.css';
import ButtonLink1 from '../Buttons/ButtonLink1';
import ButtonLink2 from '../Buttons/ButtonLink2';

const HeroOfHome = () => {
    return(
        <section className={styles.hero} >
            <div>
                <div>
                    <h1>Best food for your taste</h1>
                    <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
                </div>
                <div class={styles.buttons}>
                    <ButtonLink1 href="#" text="Book A Table" />
                    <ButtonLink2 href="#" text="Explore Menu" />
                </div>
            </div>
        </section>
    );
}

export default HeroOfHome;