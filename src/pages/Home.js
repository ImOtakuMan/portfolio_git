import "./Home.css";
import PageTransition from "../components/PageTransition";
import pro from '../assets/pro.png';
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <PageTransition>
      <div className="home-container">
        <div className="logo-container-home">
          <img src={pro} alt="Logo Icon" className="home-page-icon" />
        </div>

        <div className="home-text">
          <h1 className="home-title">Cześć, jestem Arek 👋</h1>
          <p className="home-subtitle">Front-end Developer z pasją do Reacta i UI</p>
          <p className="home-description">
            Tworzę responsywne i nowoczesne aplikacje webowe.  
            Jeśli chcesz zobaczyć moje projekty lub dowiedzieć się więcej — zapraszam!
          </p>

          <div className="home-buttons">
            <Link to="/about" className="btn-primary">O mnie</Link>
            <Link to="/contact" className="btn-secondary">Kontakt</Link>
          </div>

          <div className="home-socials">
            <a href="https://github.com/ImOtakuMan" target="_blank" rel="noreferrer">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
