import { useContext } from "react";
import "./Sobre.css";
import { AppContext } from "../../context/AppContext";

function Sobre() {
  const appContext = useContext(AppContext);

  return (
    <>
      <div className="sobre container al-center jc-center">
        <div className="sobreContainer d-flex jc-center">
          <div className="destaque d-flex">
            <h1>{appContext.languages[appContext.language].about.title}</h1>
          </div>

          <div className="paragrafos d-flex">
            <p>{appContext.languages[appContext.language].about.p1}</p>
            <p>{appContext.languages[appContext.language].about.p2}</p>
            <p>{appContext.languages[appContext.language].about.p3}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
