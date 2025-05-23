import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/footer";
import Banner from "../Components/Banner/Banner";
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
