import styles from './FullWidthSubmitButton.module.css';

export default function FullWidthSubmitButton({ text }) {
    return (
        <div className={styles['contact-form-submit']}>
            <button type="submit" className={styles['btn-submit']}>{text}</button>
        </div>
    );
}