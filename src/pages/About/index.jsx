import AboutView from "./view";
import gameUser from "../../assets/games.png";
import hospital from "../../assets/hospital.jpg";
import inventaire from "../../assets/IDEA.png";
import finance from "../../assets/finance.png";
import novakom from "../../assets/novakom.jpeg";
import vroomdata from "../../assets/vroomData.png";
import android from "../../assets/android.jpeg";
import vard from "../../assets/vard.png";

export default function About() {
    const about = {
        title: "À propos de moi",
        paragraphs: [
            "Passionné par la technologie et le développement logiciel, je suis étudiant en Master 2 I2L (Ingénierie du Logiciel Libre) et en alternance chez IDEA comme technicien informatique et développeur d’applications.",
            "J’interviens sur des applications web, des outils métiers et des solutions Power Platform, avec une attention particulière portée à la fiabilité, à l’usage réel et à la maintenance dans le temps."
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
            title: "Projet Agile – Gestion Hôpital (24h)",
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
            link: "https://www.groupe-idea.com/fr",
        },

        {
            title: "Suivi d’activité – Master Management (Entreprise)",
            description:
                "Application de suivi opérationnel : gestion des cuves, suivi des pourcentages de lignes, identification des éléments à évacuer, planification des opérations de nettoyage.",
            image: inventaire,
            tags: ["PowerApps", "PowerAutomate", "SharePoint (BDD)", "Json"],
            link:"https://www.groupe-idea.com/fr",
        },
        {
            title: "VARD – IA de Pré-Diagnostic Immobilier",
            description:
                "Conception et développement de VARD, une solution basée sur l’intelligence artificielle dédiée au pré-diagnostic immobilier. L’application analyse les caractéristiques d’un bien afin de fournir des recommandations pour la rénovation, estimer son potentiel de valorisation et faciliter la prise de décision lors de la vente. Le projet vise à automatiser l’évaluation initiale grâce à des modèles intelligents, tout en offrant une interface permettant de visualiser les insights et optimisations possibles.",
            image: vard,
            tags: ["IA", "Machine Learning", "Data Analysis", "Immobilier", "Automation", "Python"],
            link: "https://github.com/Mouam001/vard",
        },
        {
            title: "NovaKom – Infrastructure IT & Cybersécurité",
            description:
                "Co-fondateur et développeur au sein de NovaKom, une startup innovante basée aux Comores. Conception et mise en place de solutions complètes en infrastructure IT, cybersécurité, administration réseau et développement logiciel. Participation active à la structuration des systèmes informatiques pour les entreprises et PME, avec une approche orientée performance, sécurité et scalabilité.",
            image: novakom,
            tags: ["React", "TS", "Supabase", "Resend"],
            link: "https://www.novakom.tech/",
        },
        {
            title: "VroomData – Architecture Multi-Tier avec JEE",
            description:
                "Application d’analyse des immatriculations permettant de connaître le nombre de matricules par année, région, département et ville, de filtrer les véhicules par année, de proposer de futures immatriculations et d’ajouter des favoris.",
            image: vroomdata,
            tags: ["Java", "Spring", "JEE", "PostgreSQL", "ClickHouse", "Grafana", "OpenTelemetry", "Docker"],
            link: "https://github.com/Mouam001/vroomdata",
        },
    ];
    

    return <AboutView about={about} projects={projects}/>;
}
