import {useState} from "react";
import HeaderView from "./view";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {label: "Home", to: "/"},
        {label: "About Me", to: "/about"},
        {label: "Formations", to: "/formations"},
        {label: "Skills", to: "/skills"},
        {label: "Vie", to: "/voyages"},
        {label: "Contact", to: "/contact"},

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
