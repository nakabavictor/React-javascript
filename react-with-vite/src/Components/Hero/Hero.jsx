import { Link } from "react-router-dom";
import "./Hero.css";
import Button from "../Button/Button";

function Hero() {
  return (
    <>
      <div id="hero">
        <div className="hero-text">
          <h1>Let Your Home Be Unique</h1>
          <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
          <Link>
            <Button buttonStyle="default" arrow>
              Comece Agora
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
