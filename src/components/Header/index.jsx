import { useState } from "react";
import HeaderView from "./view";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About Me", href: "#about-me" },
        { label: "Formations", href: "#formations" },
        { label: "Skills", href: "#skills" },
        { label: "Vie", href: "#vie" },
        { label: "Contact", href: "#contact" },
    ];

    const toggleMenu = () => setIsOpen((v) => !v);
    const closeMenu = () => setIsOpen(false);

    return (
        <HeaderView
            navItems={navItems}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            closeMenu={closeMenu}
        />
    );
}
