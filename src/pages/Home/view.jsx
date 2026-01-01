import "./home.css";

export default function HomeView({ profile, tools }) {
    return (
        <section id="home" className="home">
            <div className="home__container">
                {/* LEFT */}
                <div className="home__profile">
                    <img src={profile.image} alt={profile.name} />
                    <h3>{profile.name}</h3>
                    <span>{profile.role}</span>
                    <small>{profile.location}</small>
                </div>

                {/* RIGHT */}
                <div className="home__content">
                    <h2>Mes Outils & Plateformes</h2>
                    <p>
                        Les technologies et plateformes que j’utilise au quotidien pour
                        créer des solutions innovantes.
                    </p>

                    <div className="home__tools">
                        {tools.map((tool) => (
                            <div key={tool.title} className="tool-card">
                                <div className="tool-card__icon">{tool.icon}</div>
                                <h4>{tool.title}</h4>
                                <p>{tool.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
