import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Banner from "../Components/Banner";

function Home() {
  return (
    <>
      <Header />
      <Button buttonStyle="default" arrow>
        Ola!
      </Button>
      <Banner title="Home" />
      <Footer />
    </>
  );
}

export default Home;
