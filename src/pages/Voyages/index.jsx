import VoyagesView from "./view";

import comores from "../../assets/comores.jpg";
import maroc from "../../assets/maroc.jpg";
import arabie from "../../assets/arabie.jpg";
import senegal from "../../assets/senegal.jpg";
import paysbas from "../../assets/paysbas.jpg";
import espagne from "../../assets/espagne.jpg";

export default function Voyages() {
    const trips = [
        {
            country: "Comores",
            description: "Pays natal, immersion culturelle et familiale.",
            image: comores,
            link: "https://fr.wikipedia.org/wiki/Comores",
        },
        {
            country: "Maroc",
            description: "Voyage culturel et découverte architecturale.",
            image: maroc,
            link: "https://fr.wikipedia.org/wiki/Maroc",
        },
        {
            country: "Arabie Saoudite",
            description: "Séjour spirituel et découverte culturelle.",
            image: arabie,
            link: "https://fr.wikipedia.org/wiki/Arabie_saoudite",
        },
        {
            country: "Sénégal",
            description: "Rencontres professionnelles et culture locale.",
            image: senegal,
            link: "https://fr.wikipedia.org/wiki/S%C3%A9n%C3%A9gal",
        },
        {
            country: "Pays-Bas",
            description: "Découverte de l’innovation et des villes modernes.",
            image: paysbas,
            link: "https://fr.wikipedia.org/wiki/Pays-Bas",
        },
        {
            country: "Espagne",
            description: "Voyage culturel et historique.",
            image: espagne,
            link: "https://fr.wikipedia.org/wiki/Espagne",
        },
    ];

    return <VoyagesView trips={trips} />;
}
