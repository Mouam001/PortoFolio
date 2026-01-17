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
        description: `Développeur logiciel orienté applications métiers et solutions web durables, avec une double compétence en développement et support IT.
En alternance, je conçois, développe et maintiens des applications web et des outils métier (React, .NET, Power Platform), tout en assurant la gestion du parc informatique et le support utilisateurs.
Attaché à la qualité, à la fiabilité et à la pérennité des solutions, mon objectif est de créer des outils digitaux adaptés aux besoins opérationnels et à forte valeur ajoutée.`,
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
