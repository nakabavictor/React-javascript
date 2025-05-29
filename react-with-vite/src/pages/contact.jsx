import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import ContactForm from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Footer/footer";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Contact() {
  const appContext = useContext(AppContext)
  return (
    <>
      <Header />
      <Banner image="contact-baner.png" title={appContext.languages[appContext.language].menu.contact} />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
