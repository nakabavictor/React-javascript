import Header from "../Components/Header/Header";
import Banner from "../Components/Banner/Banner";
import ContactForm from "../Components/ContactForm/ContactForm";
import Footer from "../Components/Footer/footer";

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
