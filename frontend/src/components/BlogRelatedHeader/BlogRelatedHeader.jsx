import styles from './BlogRelatedHeader.module.css';

export default function BlogRelatedHeader({ title, description=""}) {
    return (
        <>
        <div className={styles['blog-post-related--header']}>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
        </>
    );
}