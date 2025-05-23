import { Link } from "react-router-dom";
import Logo from "../assets/react.svg";

import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <Link className="logo" to="/">
          <img src={Logo} />
        </Link>
        <nav>
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
