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
                {/* Logo */}
                <div className="header__logo">Mouammar Soulé</div>

                {/* Desktop menu */}
                <nav className="header__nav">
                    {navItems.slice(0, -1).map((item) => (
                        <a key={item.label} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                    <a href="#contact" className="header__cta">
                        Contact
                    </a>
                </nav>

                {/* Burger */}
                <button
                    className={`burger ${isOpen ? "is-open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={closeMenu}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </header>
    );
}
