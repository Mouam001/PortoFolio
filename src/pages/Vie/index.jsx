import VieView from "./view";

import associativeImg from "../../assets/vie-associative.jpg";
import sportImg from "../../assets/sport.jpg";
import musicImg from "../../assets/music.jpg";
import travelImg from "../../assets/voyages.jpg";
import learningImg from "../../assets/learning.jpg";
import ecoImg from "../../assets/eco.jpg";

export default function Vie() {
    const activities = [
        {
            title: "Vie Associative",
            description:
                "Engagement bénévole et transmission des connaissances aux jeunes.",
            image: associativeImg,
            link: "https://www.example-association.org",
            external: true,
        },
        {
            title: "Sport & Bien-être",
            description:
                "Course à pied, yoga et défis sportifs pour l'équilibre personnel.",
            image: sportImg,
            link: "#",
            external: false,
        },
        {
            title: "Musique",
            description:
                "Guitariste amateur, participation à des jams et projets musicaux.",
            image: musicImg,
            link: "#",
            external: false,
        },
        {
            title: "Lecture & Apprentissage",
            description:
                "Veille technologique, science-fiction et développement personnel.",
            image: learningImg,
            link: "#",
            external: false,
        },
        {
            title: "Voyages",
            description:
                "Découverte de cultures, pays et nouvelles pratiques professionnelles.",
            image: travelImg,
            link: "/voyages",
            external: false,
        },
        {
            title: "Engagement Environnemental",
            description:
                "Actions locales pour un développement durable et responsable.",
            image: ecoImg,
            link: "#",
            external: false,
        },
    ];

    return <VieView activities={activities}/>;
}
