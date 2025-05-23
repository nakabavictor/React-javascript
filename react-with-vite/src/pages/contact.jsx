import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ContactForm from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <Header />
      <Banner image="../assets/about-baner.jpg" title="Contact Us" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
