import {Link} from "react-router-dom";
import "./footer.css";

export default function FooterView({ links, socials }) {
    return (
        <footer className="footer">
            <div className="footer__top">
                {/* Left */}
                <div className="footer__brand">
                    <span className="footer__logo">▶</span>
                    <span>Mouammar Soulé</span>
                </div>

                {/* Center */}
                <nav className="footer__links">
                    {links.map((l) => (
                        <Link key={l.label} to={l.to}>
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Right */}
                <div className="footer__socials">
                    {socials.map((s) => (
                        <a
                            key={s.name}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={s.name}
                            className={`social social--${s.icon}`}
                        >
                            {s.icon === "x" && "✕"}
                            {s.icon === "instagram" && "◎"}
                            {s.icon === "linkedin" && "in"}
                            {s.icon === "youtube" && "▶"}
                            {s.icon === "github" && "⌂"}
                        </a>
                    ))}
                </div>
            </div>

            <div className="footer__bottom">
                © 2025 Mouammar Soulé. Tous droits réservés.
            </div>
        </footer>
    );
}
