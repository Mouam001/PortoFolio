import SkillsView from "./view";

export default function Skills() {
    const categories = [
        {
            title: "Frontend",
            icon: "💻",
            items: [
                "React",
                "JavaScript / TypeScript",
                "HTML / CSS",
                "Tailwind CSS",
                "Vite",
            ],
        },
        {
            title: "Backend",
            icon: "⚙️",
            items: [
                ".NET / C#",
                "Node.js",
                "REST API",
                "Entity Framework",
                "WebSocket",
            ],
        },
        {
            title: "Bases de données",
            icon: "🗄️",
            items: [
                "PostgreSQL",
                "SQL Server",
                "MySQL",
                "SQLite",
            ],
        },
        {
            title: "DevOps & Cloud",
            icon: "☁️",
            items: [
                "Docker",
                "GitHub Actions (CI/CD)",
                "GitLab Runner",
                "Vercel",
            ],
        },
        {
            title: "Mobile",
            icon: "📱",
            items: [
                "Android Studio",
            ],
        },
        {
            title: "Méthodologie",
            icon: "🧠",
            items: [
                "Agile / Scrum",
                "Testing (Jest, Cypress)",
                "Clean Code",
                "Performance & optimisation",
            ],
        },
    ];

    const links = [
        { label: "GitHub", url: "https://github.com/Mouam001", icon: "🐙" },
        { label: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
        { label: "VS Code", url: "https://code.visualstudio.com", icon: "🧩" },
        { label: "JetBrains", url: "https://www.jetbrains.com", icon: "🚀" },
        { label: "Portfolio Web", url: "/", icon: "🌐" },
    ];


    return <SkillsView categories={categories} links={links} />;
}
