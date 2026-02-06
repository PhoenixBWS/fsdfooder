import styles from './HomeUniqueCard.module.css';

const HomeUniqueCard = ({image, heading}) => {
    return (
        <div className={styles.item}>
            <figure>
                <img src={image} alt="Icon" />
            </figure>
            <h3>{heading}</h3>
            <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>
    )
}
export default HomeUniqueCard;