import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import HeaderView from "./view";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { label: "Home", hash: "home" },
        { label: "About Me", hash: "about" },
        { label: "Formations", hash: "formations" },
        { label: "Skills", hash: "skills" },
        { label: "Vie", hash: "vie" },
        { label: "Contact", hash: "contact" },
    ];

    const handleNavClick = (hash) => {
        setIsOpen(false);

        if (location.pathname !== "/") {
            navigate(`/#${hash}`);
        } else {
            document
                .getElementById(hash)
                ?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <HeaderView
            navItems={navItems}
            onNavClick={handleNavClick}
            isOpen={isOpen}
            toggleMenu={() => setIsOpen(v => !v)}
            closeMenu={() => setIsOpen(false)}
        />
    );
}
