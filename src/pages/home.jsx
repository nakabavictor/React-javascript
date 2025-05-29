import Header from "../Components/Header/Header";
import ProjectsList from "../Components/ProjectsList/ProjectsList";
import Footer from "../Components/Footer/footer";
import Hero from "../Components/Hero/Hero";

function Home() {
  return (
    <>
      <Header />
      <div className="container al-center">
        <Hero />
        <ProjectsList />
      </div>
      <Footer />
    </>
  );
}

export default Home;
