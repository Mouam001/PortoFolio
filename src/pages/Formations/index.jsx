import FormationsView from "./view";
import ulcoImg from "../../assets/ulco.jpg";
import udcImg from "../../assets/udc.png";

export default function Formations() {
    const formations = [
        {
            period: "2024 – 2026",
            title: "Master en Ingénierie du Logiciel",
            school: "Université du Littoral Côte d’Opale",
            description:
                "Formation avancée axée sur l’ingénierie logicielle, l’architecture des systèmes, le développement d’applications complexes, la qualité logicielle et les pratiques professionnelles.",
            image: ulcoImg,
            link: "https://www.univ-littoral.fr",
        },
        {
            period: "2021 – 2024",
            title: "Licence en Informatique",
            school: "Université du Littoral Côte d’Opale",
            description:
                "Licence en informatique axée sur le développement logiciel, les bases de données, les systèmes informatiques et une initiation à l’intelligence artificielle.",
            image: ulcoImg,
            link: "https://www.univ-littoral.fr",
        },
        {
            period: "2020 – 2021",
            title: "L1 Génie Informatique",
            school: "IUT – Université des Comores",
            description:
                "Première année en génie informatique avec acquisition des bases en algorithmique, programmation, systèmes informatiques et mathématiques appliquées.",
            image: udcImg,
            link: "https://udc.slashz.net/",
        },
    ];

    return <FormationsView formations={formations}/>;
}
