import PageTransition from "../components/PageTransition";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8vcrhip",
        "template_vgkwfpw",
        form.current,
        "FQG70IJukQatF_IoD"
      )
      .then(
        () => alert("Message sent!"),
        () => alert("Something went wrong.")
      );
  };

  return (
    <PageTransition>
      <div className="contact-container">

        <div className="contact-text">
          <h2>Skontaktuj się ze mną</h2>
          <p>Jeśli chcesz współpracować, zatrudnić mnie lub po prostu powiedzieć "cześć" — wyślij mi wiadomość!</p>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Twoje imię" required />
            <input type="email" name="user_email" placeholder="Twój email" required />
            <textarea name="message" placeholder="Twoja wiadomość..." required />
            <button type="submit">Wyślij</button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
