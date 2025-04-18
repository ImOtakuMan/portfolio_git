import { Link } from "react-router-dom";
import { Home, Notebook, AtSign, } from 'lucide-react';
import pro from '../assets/pro.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
      <img src={pro} alt="Logo Icon" className="logo-icon" />
        <h1 className="logo">My Portfolio </h1>
      </div>
      <ul className="nav-list">
        <li>
          <Link to="/">
            <span className="icon"><Home /></span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span className="icon"><Notebook /></span>
            <span className="text">About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span className="icon"><AtSign /></span>
            <span className="text">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
