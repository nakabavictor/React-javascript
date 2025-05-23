import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import ProjectsList from "../Components/ProjectsList";

import "./home.css";

function Home() {
  return (
    <>
      <body>
        <Header />
        <div className="container al-center">
          <Hero />
          <ProjectsList />
        </div>
        <Footer />
      </body>
    </>
  );
}

export default Home;
