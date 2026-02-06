import styles from './ButtonLink2.module.css';
import { Link } from 'react-router-dom';

const ButtonLink2 = ({ href, text }) => {
    return (
        <>
            <Link to={href} className={styles.button}>
                <span>{text}</span>
            </Link>
        </>
    );
}

export default ButtonLink2;