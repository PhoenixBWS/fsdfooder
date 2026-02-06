import styles from "./About.module.css";
import CustomerReviewCard from "../../components/About/CustomerReviewCard";
import HealthyFood from "../../components/About/HealthyFood";
import AboutPlayItem from "../../components/About/AboutPlayItem";
import AboutGrid from "../../components/About/AboutGrid";
import ContactNav from '../../components/navbars/ContactNav.jsx'
import NavBar from '../../components/navbars/NavBar.jsx'
import aboutImg from "../../assets/about.avif";
import playButton from "../../assets/Play.png";
import user1 from "../../assets/user.png";
import user2 from "../../assets/user1.png";
import user3 from "../../assets/user2.png";
import play1 from "../../assets/menu.png";
import play2 from "../../assets/radio.png";
import play3 from "../../assets/timer.png";

import hand from "../../assets/hand.png";

const About = () => {
  return (
    <>
       <ContactNav />
        <NavBar />
      <section className={`${styles.sect}`}>
        <HealthyFood image={aboutImg} />
      </section>

      <section className={`${styles.sectW}`}>
        <div className={styles.playCon}>
          <div>
            <figure>
              <img src={playButton} alt="Play" />
            </figure>
            <h2 className={styles.serif}>
              Feel the authentic &amp; original taste from us
            </h2>
          </div>
        </div>
        <div className={styles.sect}>
          <div className={styles.gridTrinity2}>
            <AboutPlayItem icon={play1} heading="Multi Cuisine" />
            <AboutPlayItem icon={play2} heading="Easy To Order" />
            <AboutPlayItem icon={play3} heading="Fast Delivery" />
          </div>
        </div>
      </section>

      <section className={styles.sect}>
        <div className={styles.duoFlex}>
          <div>
            <h2 className={styles.midH2}>
              A little information for our valuable guest
            </h2>
            <p>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
            <div className={styles.quadGrid}>
              <AboutGrid title="3" subtitle="Locations" />
              <AboutGrid title="1995" subtitle="Founded" />
              <AboutGrid title="65+" subtitle="Staff Members" />
              <AboutGrid title="100%" subtitle="Satisfied Customers" />
            </div>
          </div>
          <figure>
            <img src={hand} alt="Image" />
          </figure>
        </div>
      </section>

      <section className={`${styles.sect} ${styles.sectW}`}>
        <h2 className={`${styles.serif} ${styles.sectH2} ${styles.textCenter}`}>
          What Our Customers Say
        </h2>
        <div className={styles.gridTrinity}>
          <CustomerReviewCard
            title="The best restaurant"
            review="Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles."
            image={user1}
            name="Sophire Robson"
            location="Los Angeles, CA"
          />
          <CustomerReviewCard
            title="Simply delicious"
            review="Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented."
            image={user2}
            name="Matt Cannon"
            location="San Diego, CA"
          />
          <CustomerReviewCard
            title="“One of a kind restaurant”"
            review="The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended."
            image={user3}
            name="Andy Smith"
            location="San Francisco, CA"
          />
        </div>
      </section>
    </>
  );
};
export default About;
