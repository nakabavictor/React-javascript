import { useState, useEffect } from "react";
import "./ContactForm.css";
import Button from "../Button/Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isValidForm, setIsValidForm] = useState(false);
  /*const handlesubmit = async (e) => {
    e.preventDefault();
    if (isValidForm) {
      null;
    }
  };
  */
  useEffect(() => {
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isValid =
      formData.name.trim() && formData.email.trim() && isValidEmail(formData.email) && formData.message.trim();
    setIsValidForm(isValid);
  }, [formData]);

  //
  const handleChange = (e) => {
    const [name, value] = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form action="" method="get">
        <h1>Nós amamamos encontrar novas pessoas e ajudá-las</h1>
        <div className="formcontainer">
          <div className="nomeemail">
            <div className="form-nameandemail">
              <input type="text" name="name" id="name" placeholder="Nome *" onChange={handleChange} required />
            </div>
            <div className="form-nameandemail">
              <input type="email" name="email" id="email" placeholder="Email *" onChange={handleChange} required />
            </div>
          </div>

          <div className="form-text">
            <textarea
              name="message"
              id="message"
              rows="4"
              cols="50"
              placeholder="Olá, estou interessado em..."
              required
            />
          </div>
          <Button type="submit" buttonStyle="default" disable={!isValidForm}>
            Enviar Agora
          </Button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
