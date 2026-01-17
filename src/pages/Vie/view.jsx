import { Link } from "react-router-dom";
import "./vie.css";

export default function VieView({ activities }) {
    return (
        <section className="vie">
            <header className="vie__header">
                <h2>Ma Vie</h2>
                <p>
                    Au-delà du code, je m’investis dans des activités qui nourrissent
                    mon équilibre personnel, ma curiosité et mon engagement.
                </p>
            </header>

            <div className="vie__grid">
                {activities.map((item) => {
                    const CardContent = (
                        <>
                            <div className="vie-card__image">
                                <img src={item.image} alt={item.title} />
                            </div>

                            <div className="vie-card__content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </>
                    );

                    // 🔁 Lien interne (Voyages)
                    if (item.route) {
                        return (
                            <Link
                                key={item.id}
                                to={item.route}
                                className="vie-card vie-card--clickable"
                            >
                                {CardContent}
                            </Link>
                        );
                    }

                    // 🔗 Lien externe (Association)
                    if (item.link) {
                        return (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="vie-card vie-card--clickable"
                            >
                                {CardContent}
                            </a>
                        );
                    }

                    // 🧱 Carte statique
                    return (
                        <article key={item.id} className="vie-card">
                            {CardContent}
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
