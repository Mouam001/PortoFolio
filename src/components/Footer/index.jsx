import FooterView from "./view";

export default function Footer() {
    const links = [
        { label: "Contact", href: "/contact" },
        { label: "Skills", href: "/skills" },
        { label: "Formations", href: "/formations" },
        { label: "Vie", href: "voyages" },
    ];

    const socials = [
        { name: "X", href: "https://x.com", icon: "x" },
        { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
        { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
        { name: "YouTube", href: "https://youtube.com", icon: "youtube" },
        { name: "GitHub", href: "https://github.com", icon: "github" },
    ];

    return <FooterView links={links} socials={socials} />;
}
