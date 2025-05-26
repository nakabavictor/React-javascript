import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";
import Button from "../Button/Button";
import "./Header.css";

function Header() {
  const [isOpen, SetIsOpen] = useState(false);
  const toggleMenu = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <Link className="logo" to="/">
          <img src={Logo} />
        </Link>
        <div className="mobile-menu">
          <Button buttonStyle="default" onClick={toggleMenu}>
            Menu
          </Button>
        </div>
        <nav className={`${isOpen ? "open" : ""}`}>
          <Button buttonStyle="unstayled" className="mobile-menu close-btn" onClick={toggleMenu}>
            X
          </Button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
