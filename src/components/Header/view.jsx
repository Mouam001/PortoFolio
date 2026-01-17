import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";

export default function HeaderView({
  navItems,
  isOpen,
  toggleMenu,
  closeMenu,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNavClick = (hash) => {
    closeMenu();

    if (isHome) {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${hash}`);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <button
            className="nav-link"
            onClick={() => handleNavClick("home")}
          >
            Mouammar Soulé
          </button>
        </div>

        {/* Desktop */}
        <nav className="header__nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="nav-link"
              onClick={() => handleNavClick(item.hash)}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="header__cta"
          >
            Contact
          </button>
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
        {navItems.map((item) => (
          <button
            key={item.label}
            className="mobile-link"
            onClick={() => handleNavClick(item.hash)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
