import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/react.svg";
import Button from "../Button/Button";
import "./Header.css";
import { AppContext } from "../../context/AppContext";

function Header() {
  const [isOpen, SetIsOpen] = useState(false);
  const toggleMenu = () => {
    SetIsOpen(!isOpen);
  };

  const appContext = useContext(AppContext);

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
              <Link to="/">{appContext.languages[appContext.language].menu.home}</Link>
            </li>
            <li>
              <Link to="/about">{appContext.languages[appContext.language].menu.about}</Link>
            </li>
            <li>
              <Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link>
            </li>
            <li>
              <Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
