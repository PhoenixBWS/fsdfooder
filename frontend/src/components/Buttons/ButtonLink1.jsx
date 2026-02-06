import styles from './ButtonLink1.module.css';
import { Link } from 'react-router-dom';

const ButtonLink1 = ({ href, text }) => {
    return (
        <>
            <Link to={href} className={styles.button}>
                <span>{text}</span>
            </Link>
        </>
    );
}

export default ButtonLink1;