import "./about.css";

export default function AboutView({about, projects}) {
    const handlePrivateRepoclick = () => {
        alert("Désolé, ce dépôt est privé !");
    }
    return (
        <section id="about-me" className="about">
            {/* TEXTE */}
            <div className="about__intro">
                <h2>{about.title}</h2>
                {about.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>

            {/* PROJETS */}
            <div className="about__projects">
                <div className="about__projects-header">
                    <span className="section-kicker">Réalisations</span>
                    <h3>Projets sélectionnés</h3>
                </div>

                <div className="projects__grid">
                    {projects.map((project) => (
                        <div key={project.title} className="project-card">
                            <img src={project.image} alt={project.title}/>

                            <div className="project-card__content">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>

                                {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-link"
                                >
                                    Voir le dépôt Git ↗
                                </a>
                                        ) : (
                                    <button
                                        onClick={handlePrivateRepoclick}
                                        className="project-link project-link--disabled"
                                    >
                                    Voir le dépôt Git ↗
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
