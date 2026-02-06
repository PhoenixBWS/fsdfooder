import styles from './BlogPostHeader.module.css';

export default function BlogPostHeader({ title, description=""}) {
    return (
        <>
        <section className={styles['page-header-2']}>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </section>
        </>
    );
}