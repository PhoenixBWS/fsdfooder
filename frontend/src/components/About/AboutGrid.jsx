import styles from './AboutGrid.module.css';

const AboutGrid = ({title, subtitle}) => {
    return (
        <div className={styles.item}>
            <div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

export default AboutGrid;