import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1>My App</h1>
                </div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to="/" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
                        </li>
                        <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>
                        <li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}