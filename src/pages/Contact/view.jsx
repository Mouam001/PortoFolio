import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function ContactView() {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(
                () => {
                    setSuccess(true);
                    setLoading(false);
                    formRef.current.reset();
                },
                () => {
                    setSuccess(false);
                    setLoading(false);
                }
            );
    };

    return (
        <section className="contact">
            <div className="contact__container">
                {/* LEFT */}
                <div className="contact__info">
                    <h3>Informations de Contact</h3>

                    <p><strong>Email :</strong> mouammar@gmail.com</p>
                    <p><strong>Téléphone :</strong> +33 6 12 34 56 78</p>
                    <p><strong>Localisation :</strong> France</p>

                    <div className="contact__availability">
                        <h4>Disponibilité</h4>
                        <p>
                            Je suis actuellement disponible pour de nouvelles
                            opportunités et collaborations.
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <form ref={formRef} onSubmit={sendEmail} className="contact__form">
                    <div className="form-row">
                        <input name="first_name" placeholder="Prénom *" required/>
                        <input name="last_name" placeholder="Nom *" required/>
                    </div>

                    <div className="form-row">
                        <input type="email" name="email" placeholder="Email *" required/>
                        <input name="phone" placeholder="Téléphone"/>
                    </div>

                    <div className="form-row">
                        <select name="organization" required>
                            <option value="">Type d'organisation *</option>
                            <option value="Entreprise">Entreprise</option>
                            <option value="Startup">Startup</option>
                            <option value="Indépendant">Indépendant</option>
                            <option value="Autre">Autre</option>
                        </select>

                        <input name="company" placeholder="Nom de l'entreprise"/>
                    </div>

                    <input
                        name="subject"
                        placeholder="Objet *"
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Décrivez votre projet ou votre demande..."
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "Envoi..." : "Envoyer le message"}
                    </button>

                    {success === true && (
                        <p className="success">Message envoyé avec succès ✅</p>
                    )}
                    {success === false && (
                        <p className="error">Erreur lors de l’envoi ❌</p>
                    )}
                </form>
            </div>
        </section>
    );
}
