import PageTransition from "../components/PageTransition";
import "./About.css";

const About = () => {
  return (
    <PageTransition>
      <div className="about-container">
        <div className="about-text">
          <h2>👨‍💻 O mnie</h2>
          <p>
  Cześć! Nazywam się <span className="highlight">Arek</span> i jestem pasjonatem front-endu, z zamiłowaniem do
  <span className="highlight"> nowoczesnych technologii</span> oraz dopracowanego designu interfejsów.
</p>
<p>
  Od zawsze fascynowały mnie <span className="highlight">strony internetowe</span> i ich możliwości. Uwielbiam obserwować,
  jak z kilku linijek kodu powstaje coś użytecznego, estetycznego i działającego na każdym urządzeniu.
</p>
<p>
  Moim celem jest rozwijanie się w kierunku tworzenia aplikacji webowych i stron internetowych, ponieważ
  wierzę, że to właśnie tam łączy się kreatywność z technologią.
</p>
<p>
  A dlaczego właśnie to? Bo jak powiedział ktoś mądry —
  <em>„Jeśli zamienisz swoje hobby w pracę, nigdy nie będziesz musiał naprawdę pracować”</em>.  
  A ja po prostu <span className="highlight">nie lubię pracować 😉</span> — wolę robić to, co sprawia mi przyjemność.
</p>


          <ul className="about-list">
            <li>⚛️ Tworzenie aplikacji w React</li>
            <li>🎨 Stylowanie z CSS</li>
            <li>📱 Responsive design na każdy ekran</li>
          </ul>

          <div className="about-buttons">
            <a href="/#projects" className="btn-primary">📁 Zobacz projekty</a>
            <a href="/cv.pdf" className="btn-secondary" download>⬇️ Pobierz CV</a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
