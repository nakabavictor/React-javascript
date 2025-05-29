import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";
import Sobre from "../Components/Sobre/Sobre";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function About() {
  const appContext = useContext(AppContext);
  return (
    <>
      <Header />
      <Banner title={appContext.languages[appContext.language].menu.about} image="about-baner.jpg" />
      <Sobre />
      <Footer />
    </>
  );
}

export default About;
