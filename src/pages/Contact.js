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
          <h2>Contact Me</h2>
          <p>If you'd like to collaborate, hire me, or just say hi — send me a message!</p>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your name" required />
            <input type="email" name="user_email" placeholder="Your email" required />
            <textarea name="message" placeholder="Your message..." required />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
