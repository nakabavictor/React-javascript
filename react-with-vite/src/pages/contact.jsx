import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ContactForm from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Footer";

function Contact() {
  return (
    <>
      <Header />
      <Banner image="contact-baner.png" title="Contact Us" />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
