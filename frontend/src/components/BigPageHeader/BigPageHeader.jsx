import styles from './BigPageHeader.module.css';

export default function BigPageHeader({ title, description=""}) {
    return (
        <>
        <section className={styles['page-header']}>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </section>
        </>
    );
}