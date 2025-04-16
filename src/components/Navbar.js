import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="sidebar">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <span className="icon">🏠</span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span className="icon">ℹ️</span>
            <span className="text">About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span className="icon">📞</span>
            <span className="text">Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
