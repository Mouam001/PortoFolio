import FooterView from "./view";

export default function Footer() {
    const links = [
        {label: "Contact", to: "/contact"},
        {label: "Skills", to: "/skills"},
        {label: "Formations", to: "/formations"},
        {label: "Vie", to: "/voyages"},
    ];

    const socials = [
        {name: "X", href: "https://x.com/Mouammar8080", icon: "x"},
        {name: "Instagram", href: "https://www.instagram.com/grandpainmur/", icon: "instagram"},
        {name: "LinkedIn", href: "https://www.linkedin.com/in/mouammar-soule-134b5423a/", icon: "linkedin"},
        {name: "Facebook", href: "https://www.facebook.com/noma.papao/", icon: "facebook"},
        {name: "GitHub", href: "https://github.com/Mouam001", icon: "github"},
    ];

    return <FooterView links={links} socials={socials}/>;
}
