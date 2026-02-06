import styles from './AboutPlayItem.module.css';

const AboutPlayItem = ({icon, heading}) => {
    return (
        <div className={styles.item}>
            <figure>
                <img src={icon} alt={heading} />
            </figure>
            <div>
                <h3>{heading}</h3>
                <p>In the new era of technology we look in the future with certainty life.</p>
            </div>
        </div>
    )
}

export default AboutPlayItem;