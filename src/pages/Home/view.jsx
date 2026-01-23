import "./home.css";

export default function HomeView({ profile }) {
    return (
        <section className="home">
            {/* Background animé */}
            <div className="home__background" />

            <div className="home__container">
                {/* LEFT */}
                <div className="home__content">
                    <span className="home__badge">
                        ⚡ {profile.availability}
                    </span>

                    <span className="home__eyebrow">
                        {profile.role}
                    </span>

                    <h1 className="home__name">
                        {profile.name.split(" ")[0]}{" "}
                        <span>{profile.name.split(" ")[1]}</span>
                    </h1>

                    <p className="home__description">
                        {profile.description}
                    </p>

                    <div className="home__actions">
                        <a
                            href={profile.cv}
                            download
                            className="btn btn--ghost"
                        >
                            Télécharger le CV
                        </a>
                    </div>

                    <div className="home__meta">
                        <span>📍 {profile.location}</span>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="home__visual">
                    <div className="home__photoWrap">
                        <img
                            src={profile.image}
                            alt={profile.name}
                        />

                        <div className="home__experience">
                            <strong>{profile.experience}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
