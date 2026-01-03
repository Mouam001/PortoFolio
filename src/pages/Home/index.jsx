import HomeView from "./view";
import profileImg from "../../assets/moummar.png";

export default function Home() {
    const profile = {
        name: "Mouammar Soulé",
        role: "Développeur et Téchnicien Informatique",
        location: "Calais, France, Université du Littoral Côte d'Opale (ULCO)",
        image: profileImg,
        associationRole: {
            role: "Président de l'Association",
            name: "EtudiaGo",
            url: "https://www.facebook.com/Etudiago/",
        },
    };

    const tools = [
        {
            title: "JetBrains",
            description: "IDE professionnel pour développement",
            icon: "</>",
        },
        {
            title: "VS Code",
            description: "Éditeur de code polyvalent",
            icon: "</>",
        },
        {
            title: "GitHub",
            description: "Hébergement et versioning de code",
            icon: "⌂",
        },
        {
            title: "GitLab",
            description: "Plateforme DevOps complète",
            icon: "</>",
        },
        {
            title: "LinkedIn",
            description: "Réseau professionnel",
            icon: "in",
        },
        {
            title: "X (Twitter)",
            description: "Actualités et veille tech",
            icon: "✕",
        },
        {
            title: "Instagram",
            description: "Portfolio visuel",
            icon: "◎",
        },
        {
            title: "Portfolio Web",
            description: "Site personnel et projets",
            icon: "🌐",
        },
    ];

    return <HomeView profile={profile} tools={tools}/>;
}
