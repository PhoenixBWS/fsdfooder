import styles from "./Home.module.css";
import HeroOfHome from "../../components/Home/HeroOfHome.js";
import HomeMenuGridItem from "../../components/Home/HomeMenuGridItem.js";
import HomeUniqueCard from "../../components/Home/HomeUniqueCard.js";
import CustomerReviewCard from "../../components/Home/CustomerReviewCard.js";
import HomeBlogGridItem from "../../components/Home/HomeBlogGridItem.js";
import HealthyFood from "../../components/Home/HealthyFood.js";

import ButtonLink1 from "../../components/Buttons/ButtonLink1.js";
import ButtonLink2 from "../../components/Buttons/ButtonLink2.js";
import ContactNav from '../../components/navbars/ContactNav.js'
import NavBar from '../../components/navbars/NavBar.js'
import breakfastImg from "../../assets/breakfast.png";
import dessertImg from "../../assets/dessert.png";
import drinksImg from "../../assets/drinks.png";
import MainDishesImg from "../../assets/MainDishes.png";
import visitUsImg from "../../assets/visitus.avif";

import cateringImg from "../../assets/caterings.png";
import birthdayImg from "../../assets/birthday.png";
import weddingImg from "../../assets/wedding.png";
import eventImg from "../../assets/event.png";

import cooking1 from "../../assets/cooking1.jpg";
import cooking2 from "../../assets/cooking2.jpg";
import cooking3 from "../../assets/cooking3.jpg";

import icon1 from "../../assets/icon.png";
import icon2 from "../../assets/icon1.png";
import icon3 from "../../assets/icon2.png";

import user1 from "../../assets/user.png";
import user2 from "../../assets/user1.png";
import user3 from "../../assets/user2.png";

import blog1 from "../../assets/burger.png";
import blog2 from "../../assets/fries.png";
import blog3 from "../../assets/chicken.png";
import blog4 from "../../assets/cake.png";
import blog5 from "../../assets/pizza.png";

const Home = () => {
  return (
    <>
     <ContactNav />
    <NavBar />
      <HeroOfHome />
      <section className={`${styles.sect} ${styles.sectW}`}>
        <h2 className={`${styles.serif} ${styles.sectH2} ${styles.textCenter}`}>
          Browse Our Menu
        </h2>
        <div className={`${styles.grid} ${styles.gridQuadFit}`}>
          <HomeMenuGridItem
            icon={breakfastImg}
            heading="Breakfast"
            text="In the new era of technology we look in the future with certainty and pride for our life."
          />
          <HomeMenuGridItem
            icon={MainDishesImg}
            heading="Main Dishes"
            text="In the new era of technology we look in the future with certainty and pride for our life."
          />
          <HomeMenuGridItem
            icon={drinksImg}
            heading="Drinks"
            text="In the new era of technology we look in the future with certainty and pride for our life."
          />
          <HomeMenuGridItem
            icon={dessertImg}
            heading="Desserts"
            text="In the new era of technology we look in the future with certainty and pride for our life."
          />
        </div>
      </section>

      <section className={`${styles.sect}`}>
        <HealthyFood image={visitUsImg} />
      </section>

      <section className={`${styles.sect} ${styles.sectW}`}>
        <h2 className={`${styles.serif} ${styles.sectH2} ${styles.uniqueH2}`}>
          We also offer unique services for your events
        </h2>
        <div className={`${styles.grid} ${styles.gridQuadFit}`}>
          <HomeUniqueCard image={cateringImg} heading="Catering" />
          <HomeUniqueCard image={birthdayImg} heading="Birthdays" />
          <HomeUniqueCard image={weddingImg} heading="Weddings" />
          <HomeUniqueCard image={eventImg} heading="Events" />
        </div>
      </section>

      <section className={`${styles.sect}`}>
        <div className={styles.delivery}>
          <div className={styles.deliFigs}>
            <div className={styles.deliFig1}>
              <figure>
                <img src={cooking1} alt="Cooking" />
              </figure>
            </div>
            <div className={styles.deliFig2}>
              <figure>
                <img src={cooking3} alt="Kebab" />
              </figure>
              <figure>
                <img src={cooking2} alt="Prawns" />
              </figure>
            </div>
          </div>
          <div className={styles.deliTexts}>
            <h2 className={`${styles.serif} ${styles.sectH2}`}>
              Fastest Food Delivery in City
            </h2>
            <p>
              Our visual designer lets you quickly and of drag a down your way
              to customapps for both keep desktop.{" "}
            </p>
            <ul>
              <li>
                <figure>
                  <img src={icon1} alt="icon" />
                </figure>
                <p>Delivery within 30 minutes</p>
              </li>
              <li>
                <figure>
                  <img src={icon2} alt="icon" />
                </figure>
                <p>Best Offer & Prices</p>
              </li>
              <li>
                <figure>
                  <img src={icon3} alt="icon" />
                </figure>
                <p>Online Services Available</p>
              </li>
            </ul>
          </div>
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

      <section className={`${styles.sect}`}>
        <div className={styles.BnAHead}>
          <h2 className={`${styles.serif}`}>Our Blog &amp; Articles</h2>
          <div>
            <ButtonLink1 href="/blog" text="Read All Articles" />
          </div>
        </div>
        <div className={`${styles.homeBlogGrid}`}>
          <HomeBlogGridItem
            image={blog1}
            date="January 3, 2023"
            title="The secret tips & tricks to prepare a perfect burger & pizza for our customers"
            text="Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
          />
          <HomeBlogGridItem
            image={blog2}
            date="January 3, 2023"
            title="How to prepare the perfect french fries in an air fryer"
            text="Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
          />
          <HomeBlogGridItem
            image={blog3}
            date="January 3, 2023"
            title="How to prepare delicious chicken tenders"
            text="Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
          />
          <HomeBlogGridItem
            image={blog4}
            date="January 3, 2023"
            title="7 delicious cheesecake recipes you can prepare"
            text="Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
          />
          <HomeBlogGridItem
            image={blog5}
            date="January 3, 2023"
            title="5 great pizza restaurants you should visit this city"
            text="Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
          />
        </div>
      </section>
    </>
  );
};

export default Home;
