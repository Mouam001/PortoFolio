import HomeView from "./view";
import profileImg from "../../assets/image.png";
import cvFile from "../../assets/cv.pdf";

export default function Home() {
    const profile = {
        name: "Mouammar Soulé",
        role: "Développeur & Technicien Informatique",
        availability: "Disponible pour nouvelles opportunités",
        description: `
Je développe des applications web et des outils métier pensés pour durer.
En alternance chez IDEA, j’interviens sur des solutions concrètes mêlant
développement applicatif, automatisation et qualité logicielle via la Power Platform.
        `,
        location: "Calais, France — ULCO",
        experience: "plus de 2 ans d’expérience",
        image: profileImg,
        cv: cvFile,
    };

    return <HomeView profile={profile} />;
}
