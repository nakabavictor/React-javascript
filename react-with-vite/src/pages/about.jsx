import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import Sobre from "../Components/Sobre/Sobre";

function About() {
  return (
    <>
      <Header />
      <Banner title="Sobre" />
      <Sobre />
      <Footer />
    </>
  );
}

export default About;
