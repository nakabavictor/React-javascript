import Header from "../Components/Header/Header";
import ProjectsList from "../Components/ProjectsList/ProjectsList";
import Footer from "../Components/Footer/footer";
import Banner from "../Components/Banner/Banner";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Project() {
  const appContext = useContext(AppContext)
  return (
    <>
      <Header />
      <Banner title={appContext.languages[appContext.language].menu.contact} image="projects-baner.png" />
      <ProjectsList />
      <Footer />
    </>
  );
}

export default Project;
