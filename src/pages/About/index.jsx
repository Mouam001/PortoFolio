import AboutView from "./view";
import project1 from "../../assets/game.jpeg";
import project2 from "../../assets/moummar.png";
import project3 from "../../assets/game.jpeg";

export default function About() {
    const about = {
        title: "À Propos de Moi",
        paragraphs: [
            "Passionné par le développement logiciel depuis plus de 5 ans, je me spécialise dans la création d'applications web modernes et performantes.",
            "Mon expertise couvre aussi bien le développement frontend avec React et TypeScript que le backend avec .NET et Node.js.",
            "Je crois fermement en l'importance d'un code propre, maintenable et bien testé.",
            "Toujours à la recherche de nouveaux défis, je m'intéresse aux architectures cloud et aux bonnes pratiques DevOps."
        ],
    };

    const projects = [
        {
            title: "E-Commerce Platform",
            description:
                "Plateforme de commerce en ligne moderne avec React, Node.js et PostgreSQL.",
            image: project1,
            tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
            link: "https://github.com/example/ecommerce",
        },
        {
            title: "Task Management App",
            description:
                "Application collaborative avec temps réel et notifications.",
            image: project2,
            tags: ["TypeScript", "Next.js", "Socket.io", "MongoDB"],
            link: "https://github.com/example/tasks",
        },
        {
            title: "API REST Documentation",
            description:
                "Système de documentation automatique pour APIs REST.",
            image: project3,
            tags: [".NET", "C#", "Swagger", "Docker"],
            link: "https://github.com/example/api-doc",
        },
    ];

    return <AboutView about={about} projects={projects} />;
}
