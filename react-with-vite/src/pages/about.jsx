import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Sobre from "../Components/Sobre/Sobre";

function About() {
  return (
    <>
      <Header />
      <Banner title="Sobre" image="about-baner.jpg" />
      <Sobre />
      <Footer />
    </>
  );
}

export default About;
