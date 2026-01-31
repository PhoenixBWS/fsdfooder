import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer px-5vw pt-7vw pb-5vw bg-gray-600 text-gray-200">
            <div className="flex gap-5vw justify-between">
                <div>
                    <figure class="flex items-center gap-4">
                        <img src="/src/assets/logo.png" alt="Logo" className="w-10vw h-10vw"/>
                        <figcaption className="mt-2vw">Bistro Bliss</figcaption>
                    </figure>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam placeat optio eligendi, minima et alias commodi nobis nisi. Temporibus?</p>
                    <ul className="social-media flex gap-4 mt-3vw">
                        <li><a href="#"><img src="/src/assets/twitter.png" alt="Twitter" className="w-6vw h-6vw"/></a></li>
                        <li><a href="#"><img src="/src/assets/facebook.png" alt="Facebook" className="w-6vw h-6vw"/></a></li>
                        <li><a href="#"><img src="/src/assets/instagram.png" alt="Instagram" className="w-6vw h-6vw"/></a></li>
                        <li><a href="#"><img src="/src/assets/github.png" alt="Github" className="w-6vw h-6vw"/></a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-white">Pages</h3>
                    <ul>
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

                <div>
                    <h3 className="text-white">Utility Pages</h3>
                    <ul>
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

                <div>
                    <h3 className="text-white">Follow us on Instagram</h3>
                    <div className="grid"></div>
                </div>
            </div>
            <div className="footer-container text-center">
                <p>&copy; 2026 My App. All rights reserved.</p>
            </div>
        </footer>
    );
}