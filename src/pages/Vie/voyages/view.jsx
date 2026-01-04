import useCarousel from "./useCarousel";
import "./voyages.css";

function VoyageCard({ country, images, description }) {
    const currentImage = useCarousel(images, 5000);

    return (
        <article className="voyage-card">
            <div className="voyage-card__image">
                <img src={currentImage} alt={country} />
            </div>

            <div className="voyage-card__content">
                <h3>{country}</h3>
                <p>{description}</p>
            </div>
        </article>
    );
}

export default function VoyagesView({ voyages }) {
    return (
        <section className="voyages">
            <h2>Mes Voyages</h2>

            <div className="voyages__grid">
                {voyages.map((v) => (
                    <VoyageCard key={v.country} {...v} />
                ))}
            </div>
        </section>
    );
}
