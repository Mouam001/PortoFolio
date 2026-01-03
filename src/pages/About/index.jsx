import AboutView from "./view";
import gameUser from "../../assets/game.jpeg";
import hospital from "../../assets/hospital.jpg";
import inventaire from "../../assets/IDEA.png";
import finance from "../../assets/finance.png";
import project from "../../assets/moummar.png";
export default function About() {
    const about = {
        title: "À Propos de Moi",
        paragraphs: [
            "Passionné par la téchnologie et le monde du développement . " +
            "Étudiant en Master 2 I2L (Ingénierie du Logiciel Libre), je suis en alternance chez IDEA en tant que technicien informatique et développeur d’applications."+
            " J’interviens notamment sur le développement de solutions via la Power Platform."
        ],

    };

    const projects = [
        {
            title: "Application Web – Jeux Vidéo",
            description:
                "Application web permettant de consulter le top des jeux, rechercher des titres, afficher les détails, gérer les comptes (connexion/inscription), les favoris, et intégrer un formulaire de contact avec envoi d’e-mails via EmailJS.",
            image: gameUser,
            tags: ["React", "Vite", "API", "Tailwind CSS", "EmailJS"],
            link: "https://github.com/Mouam001/GamesUsers",
        },
        {
            title: "Gestion Financière",
            description:
                "Application permettant de suivre les dépenses et revenus, visualiser les données, gérer des relevés et suivre des opérations, avec persistance en SQLite et accès à des APIs (interne & OBP).",
            image: finance,
            tags: [".NET 8", "Entity Framework Core", "SQLite", "API"],
            link: "https://github.com/Mouam001/gestion-finance",
        },
        {
            title: "Projet Agile – Gestion Hopital (24h)",
            description:
                "Développement en 24h d’une application web pour saisir et consulter des indicateurs de santé (poids, IMC, sommeil, fréquence cardiaque…), gérer plusieurs unités et assurer la sécurité des données, dans un contexte agile.",
            image: hospital,
            tags: ["React", ".NET 8", "API", "Agile", "PostgreSQL"],
            link: "https://github.com/Mouam001/Gestion-hospital",
        },
        {
            title: "Inventaire du parc informatique (Entreprise)",
            description:
                "Application interne pour assurer le suivi du parc matériel : inventaire, gestion des équipements, consultation de certains identifiants, remontée d’incidents et maintien de la base matériel.",
            image: inventaire,
            tags: ["PowerApps", "PowerAutomate", "SharePoint (BDD)", "Json"],
            link: null,
        },

        {
            title: "Suivi d’activité – Master Management (Entreprise)",
            description:
                "Application de suivi opérationnel : gestion des cuves, suivi des pourcentages de lignes, identification des éléments à évacuer, planification des opérations de nettoyage.",
            image: inventaire,
            tags: ["PowerApps", "PowerAutomate", "SharePoint (BDD)", "Json"],
            href: "https://www.groupe-idea.com/fr",
            link:null,
        },
        
    ];
    

    return <AboutView about={about} projects={projects}/>;
}
