import { Link } from "react-router-dom";
import "./vie.css";

export default function VieView({ activities }) {
    return (
        <section id="vie" className="vie">
            <h2>Vie & Centres d’intérêt</h2>

            <div className="vie__grid">
                {activities.map((item) => {
                    const CardContent = (
                        <>
                            <img src={item.image} alt={item.title} />
                            <div className="vie-card__content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </>
                    );

                    return item.external ? (
                        <a
                            key={item.title}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="vie-card"
                        >
                            {CardContent}
                        </a>
                    ) : (
                        <Link key={item.title} to={item.link} className="vie-card">
                            {CardContent}
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
