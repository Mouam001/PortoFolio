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

                    // 👉 CAS VOYAGES → navigation
                    if (item.id === "travel") {
                        return (
                            <Link
                                key={item.id}
                                to="/vie/voyages"
                                className="vie-card vie-card--clickable"
                            >
                                {CardContent}
                            </Link>
                        );
                    }

                    // 👉 AUTRES CARTES → statiques
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
