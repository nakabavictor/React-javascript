import "./Footer.css";
import { Link } from "react-router-dom";
import Linkedinicon from "../../assets/linkedinicon.svg";
import Instagramicon from "../../assets/intsgramicon.svg";
import FacebookIcon from "../../assets/facebookicon.svg";
import Xicon from "../../assets/X_icon.svg.png";
import Brasil from "../../assets/brazil_9906449 2.svg";
import USA from "../../assets/usa_4628635 2.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="cima">
          <div id="frase">
            <p>
              "Trabalho não é apenas uma obrigação — é a ponte entre quem você é e quem você pode se tornar. Quando você
              coloca propósito no que faz, até as tarefas mais simples se transformam em construção de legado"
            </p>
            <div className="socialmedia">
              <a href="" target="_blanck">
                <img src={FacebookIcon} />
              </a>
              <a href="" target="_blanck">
                <img src={Instagramicon} />
              </a>
              <a href="" target="_blanck">
                <img src={Xicon} />
              </a>
              <a href="" target="_blanck">
                <img src={Linkedinicon} />
              </a>
            </div>
          </div>
          <div id="pages">
            <h3>Pages</h3>
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
          </div>
          <div id="contato">
            <h3>Contact</h3>
            <p>Rua Japao, 11 - Britania | Belo Horizonte - MG | CEP 31011575</p>
            <p>LelouchLamp@gmail.com</p>
            <p>31 928284673</p>
          </div>
        </div>
        <div className="baixo d-flex">
          <div className="imgs">
            <img src={Brasil} alt="" style={{ width: "30px" }} />
            <img src={USA} alt="" style={{ width: "30px" }} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
