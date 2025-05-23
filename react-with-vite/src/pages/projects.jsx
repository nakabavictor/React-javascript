import Header from "../Components/Header";
import ProjectsList from "../Components/ProjectsList";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";

function Project() {
  return (
    <>
      <Header />
      <Banner title="Projetos" />
      <ProjectsList />
      <Footer />
    </>
  );
}

export default Project;
