import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderView from "./view";

const NAV_ITEMS = [
    { label: "Accueil", hash: "home" },
    { label: "À propos", hash: "about" },
    { label: "Services", hash: "services" },
    { label: "Formations", hash: "formations" },
    { label: "Compétences", hash: "skills" },
    { label: "Vie", hash: "vie", path: "/vie-personnelle" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeHash, setActiveHash] = useState("home");
    const location = useLocation();
    const navigate = useNavigate();
    const displayedActiveHash = location.pathname === "/vie-personnelle" ? "vie" : activeHash;

    const handleNavClick = (target) => {
        setIsOpen(false);

        if (target.startsWith("/")) {
            setActiveHash(target === "/vie-personnelle" ? "vie" : "home");
            navigate(target);
            return;
        }

        setActiveHash(target);

        if (location.pathname !== "/") {
            navigate(`/#${target}`);
        } else {
            document
                .getElementById(target)
                ?.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        if (location.pathname !== "/") return;

        if (location.hash) {
            const target = decodeURIComponent(location.hash.slice(1));
            window.setTimeout(() => {
                document
                    .getElementById(target)
                    ?.scrollIntoView({ behavior: "smooth" });
                setActiveHash(target);
            }, 0);
        }

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
    }, [location.pathname, location.hash]);

    return (
            <HeaderView
            navItems={NAV_ITEMS}
            activeHash={displayedActiveHash}
            onNavClick={handleNavClick}
            isOpen={isOpen}
            toggleMenu={() => setIsOpen(v => !v)}
            closeMenu={() => setIsOpen(false)}
        />
    );
}
