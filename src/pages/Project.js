import "./Project.css";
import PageTransition from "../components/PageTransition";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const Project = () => {
  return (
    <PageTransition>
      <div className="project-container">
        <div className="project-text">
          <h1 className="project-title">Moje Projekty</h1>
          <p className="project-subtitle">Zobacz, co udało mi się stworzyć 💻</p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <img src={project1} alt="Project" className="project-img" />
            <h3>Portfolio Website</h3>
            <p>Moje własne portfolio wykonane w React z animacjami i routingiem.</p>
            <div className="project-links">
              <a
                href="https://github.com/twoj-login/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twoj-login.github.io/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project2} alt="Project" className="project-img" />
            <h3>To-Do App</h3>
            <p>Minimalistyczna aplikacja do zadań z localStorage i filtrowaniem.</p>
            <div className="project-links">
              <a
                href="https://github.com/twoj-login/todo-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twoj-login.github.io/todo-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project3} alt="Project" className="project-img" />
            <h3>Ole Kalkulator</h3>
            <p>Aplikacja służąca do liczenia wydajności pracy.</p>
            <div className="project-links">
              <a
                href="https://github.com/twoj-login/ole-kalkulator"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twoj-login.github.io/ole-kalkulator"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project4} alt="Project" className="project-img" />
            <h3>Strona gabinetu fizjoterapi</h3>
            <p>Strona główna gabinetu fizjoterapi</p>
            <div className="project-links">
              <a
                href="https://github.com/twoj-login/fizjoterapia"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twoj-login.github.io/fizjoterapia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project5} alt="Project" className="project-img" />
            <h3>Sklep magicznych mikstur</h3>
            <p>Sklep z magicznymi miksturami z prostym i intuicyjnym interfejsem.</p>
            <div className="project-links">
              <a
                href="https://github.com/twoj-login/magic-shop"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twoj-login.github.io/magic-shop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project6} alt="Project" className="project-img" />
            <h3>Jeszcze nie wiem</h3>
            <p>Cos tu dodam.</p>
            <div className="project-links">
              <a
                href="https://github.com/twoj-login/magic-shop"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twoj-login.github.io/magic-shop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Project;