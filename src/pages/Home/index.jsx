// import HomeView from "./view";
// import profileImg from "../../assets/image.png";
// import cvFile from "../../assets/CV_Mouammar.pdf";

// export default function Home() {
//     const profile = {
//         name: "Mouammar Soulé",
//         role: "Développeur & Technicien Informatique",
//         availability: "Disponible pour nouvelles opportunités",
//         description: `
// Développeur logiciel spécialisé dans la conception d’applications métiers et de solutions web pérennes, avec une double expertise en développement et support IT.
// En alternance, j’interviens sur l’ensemble du cycle de vie des applications (conception, développement, maintenance), en m’appuyant sur des technologies comme React, .NET et la Power Platform, tout en assurant la gestion et l’optimisation des environnements informatiques.
// Mon approche est guidée par la qualité du code, la fiabilité et l’adéquation des solutions avec Git.
// `,
//         location: "Calais, France — ULCO",
//         experience: "plus de 2 ans d’expérience",
//         image: profileImg,
//         cv: cvFile,
//     };

//     return <HomeView profile={profile} />;
// }
import HomeView from "./view";
import profileImg from "../../assets/image.png";
import cvFile from "../../assets/CV_Mouammar.pdf";

// 👇 IMPORT DES PAGES EXISTANTES
import About from "../About";
import Formations from "../Formations";
import Skills from "../Skills";
import Vie from "../Vie";
import Contact from "../Contact";

export default function Home() {
    const profile = {
        name: "Mouammar Soulé",
        role: "Développeur & Technicien Informatique",
        availability: "Disponible pour nouvelles opportunités",
        description: `
Développeur logiciel spécialisé dans la conception d’applications métiers et de solutions web pérennes,
avec une double expertise en développement et support IT.
`,
        location: "Calais, France — ULCO",
        experience: "plus de 2 ans d’expérience",
        image: profileImg,
        cv: cvFile,
    };

    return (
        <>
            {/* HERO */}
            <section id="home">
                <HomeView profile={profile} />
            </section>

            {/* ABOUT */}
            <section id="about">
                <About />
            </section>

            {/* FORMATIONS */}
            <section id="formations">
                <Formations />
            </section>

            {/* SKILLS */}
            <section id="skills">
                <Skills />
            </section>

            {/* VIE */}
            <section id="vie">
                <Vie />
            </section>

            {/* CONTACT */}
            <section id="contact">
                <Contact />
            </section>
        </>
    );
}
