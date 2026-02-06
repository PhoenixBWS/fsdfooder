import styles from './HomeMenuGridItem.module.css';
import { Link } from 'react-router-dom';

const HomeMenuGridItem = ({icon, heading, text}) => {
    return (
        <div className={styles.item}>
            <figure>
                <div>
                    <img src={icon} alt="Icon" />
                </div>
            </figure>
            <h3>{heading}</h3>
            <p>{text}</p>
            <div>
                <Link to="#">Explore Menu</Link>
            </div>
        </div>
    )
}

export default HomeMenuGridItem;