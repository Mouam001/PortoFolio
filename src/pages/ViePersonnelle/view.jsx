import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./vie-personnelle.css";

function upsertMeta(name, content) {
    let meta = document.querySelector(`meta[name="${name}"]`);

    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
    }

    meta.setAttribute("content", content);
}

export default function ViePersonnelleView({ activities }) {
    useEffect(() => {
        document.title = "Vie personnelle & engagements | Mouammar Soulé";
        upsertMeta(
            "description",
            "Découvrez la vie associative, le sport, la musique, l'apprentissage, les voyages et les engagements environnementaux de Mouammar Soulé."
        );
        upsertMeta(
            "keywords",
            "Mouammar Soulé, vie associative, sport, musique, voyages, environnement, engagements"
        );
    }, []);

    return (
        <section className="vie-page">
            <div className="vie-page__hero">
                <span className="section-kicker">Au-delà du code</span>
                <h1>Vie personnelle & engagements</h1>
                <p>
                    Ces activités complètent mon parcours technique : elles nourrissent
                    mon équilibre personnel, mon ouverture, mon sens du collectif et mon
                    engagement dans des projets utiles.
                </p>
                <Link to="/#home" className="vie-page__back">
                    Retour à l’accueil
                </Link>
            </div>

            <div className="vie-page__grid">
                {activities.map((item) => {
                    const card = (
                        <>
                            <div className="vie-page-card__image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="vie-page-card__content">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </>
                    );

                    if (item.route) {
                        return (
                            <Link
                                key={item.id}
                                to={item.route}
                                className="vie-page-card vie-page-card--clickable"
                            >
                                {card}
                            </Link>
                        );
                    }

                    if (item.link) {
                        return (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="vie-page-card vie-page-card--clickable"
                            >
                                {card}
                            </a>
                        );
                    }

                    return (
                        <article key={item.id} className="vie-page-card">
                            {card}
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
