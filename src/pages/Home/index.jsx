import HomeView from "./view";
import profileImg from "../../assets/profile.png";
import cvFile from "../../assets/CV_Mouammar.pdf";

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
            
            <section id="home">
                <HomeView profile={profile} />
            </section>
            
            <section id="about">
                <About />
            </section>
            
            <section id="formations">
                <Formations />
            </section>
            
            <section id="skills">
                <Skills />
            </section>
            
            <section id="vie">
                <Vie />
            </section>
            
            <section id="contact">
                <Contact />
            </section>
        </>
    );
}
