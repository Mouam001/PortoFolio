import SkillsView from "./view";

export default function Skills() {
    const skills = {
        frontend: [
            { name: "React", level: 90 },
            { name: "javaScript", level: 65 },
            { name: "Tailwind CSS", level: 90 },
            { name: "HTML / CSS", level: 95 },
        ],
        backend: [
            { name: ".NET / C#", level: 85 },
            { name: "Node.js", level: 60 },
            { name: "Python", level: 75 },
            { name: "SQL", level: 85 },
            { name: "PHP", level: 65 },
            { name: "PostgreSQL", level: 40 },
            { name: "JAVA", level: 65 },
            { name: "C++", level: 50 },
        ],
        tools: [
            { name: "Git", level: 90 },
            { name: "VS Code", level: 95 },
            { name: "JetBrains", level: 85 },
            { name: "Microsoft Power Platform", level: 70 },
            { name: "CI/CD", level: 75 },
            { name: "WampServer", level: 50 },
            { name: "GLPI", level: 95 },
            { name: "PushManager", level: 90 },
        ],
    };

    const tags = [
        "React",
        ".NET",
        "Android Studio",
        "C#",
        "Python",
        "Node.js",
        "Tailwind",
        "PostgreSQL",
        "Git",
        "MySql",
        "VS Code",
        "Jet Brains",
        "Microsoft Power Platform"
    ];

    return <SkillsView skills={skills} tags={tags} />;
}
