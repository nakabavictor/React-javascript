import { useContext } from "react";
import { Link } from "react-router-dom";
import Linkedinicon from "../../assets/linkedinicon.svg";
import Instagramicon from "../../assets/intsgramicon.svg";
import FacebookIcon from "../../assets/facebookicon.svg";
import Xicon from "../../assets/X_icon.svg.png";
import Brasil from "../../assets/brazil_9906449 2.svg";
import USA from "../../assets/usa_4628635 2.svg";
import Lua from "../../assets/2023236.svg";
import Sol from "../../assets/1075154.svg";
import "./Footer.css";
import { AppContext } from "../../context/AppContext";

function Footer() {
  const newBackgroundColor = "#484D50";
  const appContext = useContext(AppContext);
  const { changeBackgroundColor } = useContext(AppContext);

  const mudarlinguagem = (pais) => {
    appContext.setLanguage(pais);
  };

  const handleImageClick = () => {
    if (typeof changeBackgroundColor === "function") {
      changeBackgroundColor(newBackgroundColor); // Chama a função do contexto!
    } else {
      console.error("changeBackgroundColor não encontrada no contexto!");
    }
  };

  return (
    <>
      <footer>
        <div className="cima">
          <div id="frase">
            <p>{appContext.languages[appContext.language].general.footerLogoText}</p>
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
            <h3>{appContext.languages[appContext.language].general.pages}</h3>
            <nav>
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
          </div>
          <div id="contato">
            <h3>{appContext.languages[appContext.language].menu.contact}</h3>
            <p>Rua Japao, 11 - Britania | Belo Horizonte - MG | CEP 31011575</p>
            <p>LelouchLamp@gmail.com</p>
            <p>31 928284673</p>
          </div>
        </div>
        <div className="baixo d-flex">
          <div className="imgs">
            <img src={Lua} alt="" onClick={handleImageClick} style={{ width: "25px", height: "30px" }} />
            <img src={Brasil} alt="" onClick={() => mudarlinguagem("br")} style={{ width: "25px", height: "30px" }} />
            <img src={USA} alt="" onClick={() => mudarlinguagem("en")} style={{ width: "25px", height: "30px" }} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
