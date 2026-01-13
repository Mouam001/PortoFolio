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
En alternance, j'allie développement sur Power Platform et gestion de parc informatique. Je conçois et maintiens des applications web et des outils métier robustes, tout en assurant un support technique de proximité. Mon objectif : créer des solutions digitales pérennes qui répondent précisément aux besoins opérationnels.
        `,
        location: "Calais, France — ULCO",
        experience: "plus de 2 ans d’expérience",
        image: profileImg,
        cv: cvFile,
    };

    return <HomeView profile={profile} />;
}
