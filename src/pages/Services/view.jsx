import {
    ArrowUpRight,
    Blocks,
    Code2,
    LifeBuoy,
    RefreshCw,
    Sparkles,
    Workflow,
} from "lucide-react";
import "./services.css";

const icons = [Code2, Blocks, Workflow, Sparkles, RefreshCw, LifeBuoy];

export default function ServicesView({ services }) {
    return (
        <section id="services" className="services">
            <div className="services__header">
                <span className="section-kicker">Services</span>
                <h2>Ce que je peux réaliser</h2>
                <p>
                    Des interventions concrètes pour créer, améliorer ou automatiser des outils
                    numériques utiles, avec une approche claire et adaptée à votre contexte.
                </p>
            </div>

            <div className="services__grid">
                {services.map((service, index) => {
                    const Icon = icons[index] || Code2;

                    return (
                        <article className="service-card" key={service.title}>
                            <div className="service-card__icon">
                                <Icon size={22} strokeWidth={2.2} />
                            </div>

                            <div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>

                            <ul>
                                {service.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    );
                })}
            </div>

            <div className="services__cta">
                <div>
                    <p>
                        Vous avez une idée, un outil à améliorer ou un besoin à clarifier ?
                    </p>
                    <span>
                        Retrouvez aussi mon univers entrepreneurial avec Novakom.
                    </span>
                </div>

                <div className="services__cta-actions">
                    <a href="#contact">
                        Discuter du besoin
                        <ArrowUpRight size={18} />
                    </a>
                    <a
                        href="https://www.novakom.tech/"
                        target="_blank"
                        rel="noreferrer"
                        className="services__cta-link--ghost"
                    >
                        Découvrir Novakom
                        <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}
