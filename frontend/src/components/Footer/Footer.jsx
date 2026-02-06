import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import footerLogo from '../../assets/footerLogo.png';
import insta1 from '../../assets/footer/2afc8d85df65694e80da72b0cf7de51a40b50eda.avif';
import insta2 from '../../assets/footer/474b1a28c06d46003df0b80dda4474c726928827.avif';
import insta3 from '../../assets/footer/2f8aae03a37ce4d049abe6d7f425f16004de4208.avif';
import insta4 from '../../assets/footer/c957e3732cc67a477e4e2d06b4adddd11c436044.avif';

export default function Footer() {
    return (
        <footer>
            <div className={styles['footer-flex']}>
                <div className={styles['footer-logo-sec']}>
                    <figure>
                        <img src={footerLogo} alt="Logo" />
                        <figcaption>Bistro Bliss</figcaption>
                    </figure>
                    <p className={styles['footer-details']}>In the new era of technology, we proudly serve great food with modern convenience — in our restaurant or delivered to your door.</p>
                    <ul className={styles['footer-social']}>
                        <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-github"></i></a></li>
                    </ul>
                </div>
                
                <div className={styles['footer-pages']}>
                    <h3>Pages</h3>
                    <ul className={styles['footer-link-list']}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/delivery">Delivery</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles['footer-pages']}>
                    <h3>Utility Pages</h3>
                    <ul className={styles['footer-link-list']}>
                        <li>
                            <Link to="/">Start Here</Link>
                        </li>
                        <li>
                            <Link to="/about">Styleguide</Link>
                        </li>
                        <li>
                            <Link to="/menu">Password Protected</Link>
                        </li>
                        <li>
                            <Link to="/pricing">404 Not Found</Link>
                        </li>
                        <li>
                            <Link to="/blog">Licenses</Link>
                        </li>
                        <li>
                            <Link to="/contact">Changelog</Link>
                        </li>
                        <li>
                            <Link to="/delivery">View More</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles['footer-insta-sec']}>
                    <h3>Follow us on Instagram</h3>
                    <div className={styles['footer-insta-grid']}>
                        <div>
                            <img src={insta1} alt="Instagram 1" />
                        </div>
                        <div>
                            <img src={insta2} alt="Instagram 2" />
                        </div>
                        <div>
                            <img src={insta3} alt="Instagram 3" />
                        </div>
                        <div>
                            <img src={insta4} alt="Instagram 4" />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles['footer-container']}>
                <p>Copyright &copy; 2023 Hashtag Developer. All rights reserved.</p>
            </div>
        </footer>
    );
}