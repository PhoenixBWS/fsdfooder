import styles from './CustomerReviewCard.module.css';

const CustomerReviewCard = ({title, review, image, name, location}) => {
    return (
        <div className={styles.item}>
            <h3>"{title}"</h3>
            <article>
                <p>{review}</p>
            </article>
            <hr />
            <div className={styles.user}>
                <figure>
                    <img src={image} alt={name} />
                </figure>
                <div>
                    <h4>{name}</h4>
                    <p>
                        <small>{location}</small>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviewCard;