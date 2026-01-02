import { Link } from "react-router-dom";
import "./header.css";

export default function HeaderView({
                                       navItems,
                                       isOpen,
                                       toggleMenu,
                                       closeMenu,
                                   }) {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to="/">Mouammar Soulé</Link>
                </div>

                {/* Desktop */}
                <nav className="header__nav">
                    {navItems.map(item => (
                        <Link key={item.label} to={item.to}>
                            {item.label}
                        </Link>
                    ))}
                    <Link to="/contact" className="header__cta">
                        Contact
                    </Link>
                </nav>

                {/* Burger */}
                <button
                    className={`burger ${isOpen ? "is-open" : ""}`}
                    onClick={toggleMenu}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile */}
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                {navItems.map(item => (
                    <Link
                        key={item.label}
                        to={item.to}
                        onClick={closeMenu}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </header>
    );
}
