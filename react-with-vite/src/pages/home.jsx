import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

function Home() {
  return (
    <>
      <Header />
      <Button buttonStyle="default" arrow>
        Ola!
      </Button>
      <Footer />
    </>
  );
}

export default Home;
