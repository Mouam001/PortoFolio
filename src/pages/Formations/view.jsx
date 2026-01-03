import "./formations.css";

export default function FormationsView({formations}) {
    return (
        <section id="formations" className="formations">
            <div className="formations__header">
                <h2>Formations</h2>
                <p>
                    Mon parcours académique m’a permis d’acquérir des bases solides en
                    informatique et de me spécialiser dans le développement logiciel.
                </p>
            </div>

            <div className="timeline">
                {formations.map((item, index) => (
                    <div
                        key={item.title}
                        className={`timeline__item ${
                            index % 2 === 0 ? "left" : "right"
                        }`}
                    >
                        <div className="timeline__content">
                            <span className="timeline__period">{item.period}</span>
                            <h3>{item.title}</h3>
                            <h4>{item.school}</h4>
                            <p>{item.description}</p>
                            <a href={item.link} target="_blank" rel="noreferrer">
                                Visiter le site ↗
                            </a>
                        </div>

                        <div className="timeline__image">
                            <img src={item.image} alt={item.school}/>
                        </div>
                    </div>
                ))}

                <div className="timeline__line"/>
            </div>
        </section>
    );
}
