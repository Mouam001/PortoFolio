import "./skills.css";

export default function SkillsView({ categories, links }) {
    return (
        <section id="skills" className="skills">
            <header className="skills__header">
                <span className="section-kicker">Compétences</span>
                <h2>Compétences techniques</h2>
                <p>
                    Un aperçu des technologies et méthodologies que j’utilise
                    pour concevoir des applications performantes et maintenables.
                </p>
            </header>

            <div className="skills__grid">
                {categories.map((cat) => (
                    <div key={cat.title} className="skills-card">
                        <div className="skills-card__title">
                            <span className="skills-card__icon">{cat.icon}</span>
                            <h3>{cat.title}</h3>
                        </div>

                        <ul>
                            {cat.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="skills__links">
                <h3>Outils & Plateformes</h3>

                <div className="skills__links-grid">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="skills-link"
                        >
                            <span className="skills-link__icon">{link.icon}</span>
                            <span className="skills-link__label">{link.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
