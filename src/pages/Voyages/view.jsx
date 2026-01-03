import "./voyages.css";

export default function VoyagesView({trips}) {
    return (
        <section className="voyages">
            <h2>Mes Voyages</h2>

            <div className="voyages__grid">
                {trips.map((trip) => (
                    <a
                        key={trip.country}
                        href={trip.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="voyage-card"
                    >
                        <img src={trip.image} alt={trip.country}/>
                        <div className="voyage-card__content">
                            <h3>{trip.country}</h3>
                            <p>{trip.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
