import ServicesView from "./view";

export default function Services() {
    const services = [
        {
            title: "Applications web sur mesure",
            description:
                "Concevoir une interface claire et une base technique fiable pour répondre à un besoin métier précis.",
            items: ["React / Vite", "API et formulaires", "Interfaces responsives"],
        },
        {
            title: "Outils métiers internes",
            description:
                "Transformer des processus manuels en outils simples à utiliser au quotidien par les équipes.",
            items: ["Suivi d’activité", "Inventaire", "Tableaux de bord opérationnels"],
        },
        {
            title: "Automatisation de workflows",
            description:
                "Réduire les tâches répétitives et fiabiliser les échanges entre formulaires, fichiers et outils existants.",
            items: ["Power Automate", "Notifications", "Synchronisation de données"],
        },
        {
            title: "Solutions Power Platform",
            description:
                "Créer ou améliorer des applications Power Apps connectées à SharePoint et adaptées à un usage terrain.",
            items: ["Power Apps", "SharePoint", "Power Automate"],
        },
        {
            title: "Maintenance et évolution",
            description:
                "Faire évoluer une application existante, corriger les irritants et améliorer la lisibilité du code.",
            items: ["Corrections", "Optimisation UX", "Structuration progressive"],
        },
        {
            title: "Support IT et accompagnement",
            description:
                "Aider à diagnostiquer, documenter et améliorer l’environnement informatique ou les usages d’un outil.",
            items: ["Assistance technique", "Documentation", "Montée en compétence"],
        },
    ];

    return <ServicesView services={services} />;
}
