import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import styles from './BlogGridItem.module.css';

// ...existing code...
import styles from './BlogGridItem.module.css';

console.log('BlogGridItem styles:', styles);
// ...existing code...

export default function BlogGridItem({ imagePath, title, y="50%" }) {
    const [src, setSrc] = useState('');

    useEffect(() => {
        let mounted = true;
        const load = async () => {
            try {
                const mod = await import(/* @vite-ignore */ imagePath);
                if (mounted) setSrc(mod?.default || mod);
            } catch (e) {
                if (mounted) setSrc(imagePath);
            }
        }

        load();
        return () => { mounted = false; };
    }, [imagePath]);

    if (!src) return null; // or show a loader

    return (
        <>
        <Link to="/blog-post" className={styles['blog-item']}>
            <figure>
                <img src={src} style={{ objectPosition: `50% ${y}` }} alt={title} />
            </figure>
            <div className={styles['blog-item-meta']}>
                <time dateTime="2023-01-03">January 3, 2023</time>
                <h2>{title}</h2>
            </div>
        </Link>
        </>
    );
}