import "./skills.css";

export default function SkillsView({ skills, tags }) {
    return (
        <section id="skills" className="skills">
            <div className="skills__header">
                <h2>Compétences</h2>
                <p>
                    Un aperçu de mes compétences techniques et des technologies que je
                    maîtrise.
                </p>
            </div>

            <div className="skills__grid">
                <SkillCard title="Frontend" items={skills.frontend} />
                <SkillCard title="Backend" items={skills.backend} />
                <SkillCard title="Outils" items={skills.tools} />
            </div>

            <div className="skills__tags">
                <h3>Technologies Maîtrisées</h3>
                <div className="tags">
                    {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillCard({ title, items }) {
    return (
        <div className="skill-card">
            <h4>{title}</h4>

            {items.map((skill) => (
                <div key={skill.name} className="skill">
                    <div className="skill__top">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                    </div>
                    <div className="skill__bar">
                        <div
                            className="skill__progress"
                            style={{ width: `${skill.level}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
