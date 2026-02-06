import styles from './HomeBlogGridItem.module.css';
import { Link } from 'react-router-dom';

const HomeBlogGridItem = ({image, date, title, text=null}) => {
    return (
        <Link to="/blog-post" className={styles.item}>
            <figure>
                <img src={image} alt={title} />
            </figure>
            <article>
                <time dateTime={date}>{date}</time>
                <h3>{title}</h3>
                {text && <p>{text}</p>}
            </article>
        </Link>
    )
}

export default HomeBlogGridItem;