import VieView from "./view";

import associativeImg from "../../assets/Logo.jpg";
import sportImg from "../../assets/sport.webp";
import musicImg from "../../assets/moummar.png";
import travelImg from "../../assets/voyage.jpg";
import learningImg from "../../assets/veille.jpg";
import ecoImg from "../../assets/moummar.png";

export default function Vie() {
    const activities = [
        {
            id: "association",
            title: "Vie associative",
            description:
                "Engagement bénévole auprès des jeunes, axé sur l’accompagnement, l’éducation et la transmission des connaissances.",
            image: associativeImg,
        },
        {
            id: "sport",
            title: "Sport & Bien-être",
            description:
                "Discipline personnelle à travers le sport, la régularité et le dépassement de soi.",
            image: sportImg,
        },
        {
            id: "music",
            title: "Musique",
            description:
                "Pratique musicale comme espace de créativité, d’expression personnelle et de partage.",
            image: musicImg,
        },
        {
            id: "learning",
            title: "Lecture & Apprentissage",
            description:
                "Veille technologique, lecture et apprentissage continu pour nourrir la curiosité intellectuelle.",
            image: learningImg,
        },
        {
            id: "travel",
            title: "Voyages",
            description:
                "Découverte culturelle et ouverture internationale à travers différents pays et environnements.",
            image: travelImg,
            route: "/vie/voyages",
        },
        {
            id: "eco",
            title: "Engagement environnemental",
            description:
                "Sensibilité aux enjeux écologiques et participation à des actions locales responsables.",
            image: ecoImg,
        },
    ];

    return <VieView activities={activities} />;
}
