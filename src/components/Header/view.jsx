import { useLocation, useNavigate } from "react-router-dom";
import "./header.css";

export default function HeaderView({
  navItems,
  activeHash,
  onNavClick,
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

  const navigateTo = onNavClick || handleNavClick;

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <button
            className="header__brand"
            onClick={() => navigateTo("home")}
          >
            Mouammar Soulé
          </button>
        </div>

        {/* Desktop */}
        <nav className="header__nav">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-link ${activeHash === item.hash ? "is-active" : ""}`}
              onClick={() => navigateTo(item.path || item.hash)}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => navigateTo("contact")}
            className={`header__cta ${activeHash === "contact" ? "is-active" : ""}`}
          >
            Contact
          </button>
        </nav>

        {/* Burger */}
        <button
          className={`burger ${isOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
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
            className={`mobile-link ${activeHash === item.hash ? "is-active" : ""}`}
            onClick={() => navigateTo(item.path || item.hash)}
          >
            {item.label}
          </button>
        ))}
        <button
          className={`mobile-link mobile-link--cta ${activeHash === "contact" ? "is-active" : ""}`}
          onClick={() => navigateTo("contact")}
        >
          Contact
        </button>
      </div>
    </header>
  );
}
