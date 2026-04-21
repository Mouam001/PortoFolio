import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderView from "./view";

const NAV_ITEMS = [
    { label: "Accueil", hash: "home" },
    { label: "À propos", hash: "about" },
    { label: "Formations", hash: "formations" },
    { label: "Compétences", hash: "skills" },
    { label: "Services", hash: "services" },
    { label: "Vie", hash: "vie" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeHash, setActiveHash] = useState("home");
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (hash) => {
        setIsOpen(false);
        setActiveHash(hash);

        if (location.pathname !== "/") {
            navigate(`/#${hash}`);
        } else {
            document
                .getElementById(hash)
                ?.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (location.pathname !== "/") return;

        const sectionIds = [...NAV_ITEMS.map((item) => item.hash), "contact"];
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible?.target?.id) {
                    setActiveHash(visible.target.id);
                }
            },
            {
                rootMargin: "-35% 0px -50% 0px",
                threshold: [0.12, 0.35, 0.6],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [location.pathname]);

    return (
            <HeaderView
            navItems={NAV_ITEMS}
            activeHash={activeHash}
            onNavClick={handleNavClick}
            isOpen={isOpen}
            toggleMenu={() => setIsOpen(v => !v)}
            closeMenu={() => setIsOpen(false)}
        />
    );
}
