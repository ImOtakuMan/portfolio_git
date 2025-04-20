import { Link } from "react-router-dom";
import { Home, Notebook, AtSign } from "lucide-react";
import { useState } from "react";
import pro from "../assets/pro.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="logo-container">
          <img src={pro} alt="Logo Icon" className="logo-icon" />
          <h1 className="logo">My Portfolio</h1>
        </div>

        <ul className="nav-list">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <span className="icon"><Home /></span>
              <span className="text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              <span className="icon"><Notebook /></span>
              <span className="text">About</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <span className="icon"><AtSign /></span>
              <span className="text">Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      {!isOpen && (
        <div className="hamburger-icon" onClick={() => setIsOpen(true)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
