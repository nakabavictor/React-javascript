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
        <div className="hero">
          <Hero />
        </div>
        <div className="List">
          <ProjectsList />
        </div>
        <Footer />
      </body>
    </>
  );
}

export default Home;
