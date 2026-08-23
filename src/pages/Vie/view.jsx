import { Link } from "react-router-dom";
import "./vie.css";

export default function VieView({ activities }) {
    const keywords = activities.map((item) => item.title);

    return (
        <section className="vie">
            <Link to="/vie-personnelle" className="vie-preview">
                <div className="vie-preview__content">
                    <span className="section-kicker">Au-delà du code</span>
                    <h2>Vie personnelle & engagements</h2>
                    <p>
                        Au-delà du développement logiciel, je m’investis dans la vie associative,
                        le sport, la musique, l’apprentissage, les voyages et les actions
                        environnementales. Découvrez les activités et les engagements qui
                        participent à mon parcours personnel.
                    </p>

                    <div className="vie-preview__tags" aria-label="Activités principales">
                        {keywords.map((keyword) => (
                            <span key={keyword}>{keyword}</span>
                        ))}
                    </div>
                </div>

                <span className="vie-preview__button">Découvrir mes engagements</span>
            </Link>
        </section>
    );
}
