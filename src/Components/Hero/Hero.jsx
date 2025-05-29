import { Link } from "react-router-dom";
import "./Hero.css";
import Button from "../Button/Button";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

function Hero() {
  const appContext = useContext(AppContext);
  return (
    <>
      <div id="hero">
        <div className="hero-text d-flex">
          <h1>{appContext.languages[appContext.language].hero.title}</h1>
          <p>{appContext.languages[appContext.language].hero.subtitle}</p>
        </div>
        <div className="buttonhero">
          <Link to="/contact">
            <Button buttonStyle="default" arrow>
              {appContext.languages[appContext.language].hero.cta}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
