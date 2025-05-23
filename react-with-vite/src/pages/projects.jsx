import Header from "../Components/Header/Header";
import ProjectsList from "../Components/ProjectsList/ProjectsList";
import Footer from "../Components/Footer/footer";
import Banner from "../Components/Banner/Banner";

function Project() {
  return (
    <>
      <Header />
      <Banner title="Projetos" image="projects-baner.png" />
      <ProjectsList />
      <Footer />
    </>
  );
}

export default Project;
