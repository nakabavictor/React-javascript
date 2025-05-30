import { useState, useEffect, useContext } from "react";
import "./ContactForm.css";
import Button from "../Button/Button";
import { AppContext } from "../../Context/AppContext";

function ContactForm() {
  const appContext = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isValidForm, setIsValidForm] = useState(false);
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (isValidForm) {
      setFormSubmitLoading(true);
      try {
        const response = await fetch(`https://api.web3forms.com/submit`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ ...formData, access_key: "6b3efbeb-7416-48fc-bffe-95d9383e6c2a" }),
        });
        if (response.ok) {
          setFormSubmitted(true);
          console.log("foi");
        } else {
          alert(`${appContext.languages[appContext.language].contact.pl1}`);
        }
      } catch (e) {
        alert("Erro: ", e);
      } finally {
        setFormSubmitLoading(false);
      }
    } else {
      console.log("Invalid");
    }
  };

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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <h1>{appContext.languages[appContext.language].contact.title}</h1>
        <div className="formcontainer">
          <div className="nomeemail">
            <input type="hidden" name="access_key" value="6b3efbeb-7416-48fc-bffe-95d9383e6c2a"></input>
            <div className="form-nameandemail">
              <input
                type="text"
                name="name"
                id="name"
                placeholder={appContext.languages[appContext.language].contact.pl1}
                required={appContext.languages[appContext.language].general.required}
                onChange={handleChange}
              />
            </div>
            <div className="form-nameandemail">
              <input
                type="email"
                name="email"
                id="email"
                placeholder={appContext.languages[appContext.language].contact.pl2}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-text">
            <textarea
              name="message"
              id="message"
              rows="4"
              cols="50"
              placeholder={appContext.languages[appContext.language].contact.pl3}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex al-center jc-center" style={{ width: "300px" }}>
            {formSubmitted && <p>{appContext.languages[appContext.language].contact.successMsg}</p>}
            <Button type="submit" buttonStyle="default" disabled={!isValidForm || formSubmitLoading}>
              {appContext.languages[appContext.language].general.send}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
