import "./ContactForm.css";
import Button from "../Button/Button";

function ContactForm() {
  return (
    <>
      <form action="" method="get">
        <h1>Nós amamamos encontrar novas pessoas e ajudá-las</h1>
        <div className="formcontainer">
          <div className="nomeemail">
            <div className="form-nameandemail">
              <input type="text" name="name" id="name" placeholder="Nome *" required />
            </div>
            <div className="form-nameandemail">
              <input type="email" name="email" id="email" placeholder="Email *" required />
            </div>
          </div>

          <div className="form-text">
            <textarea
              name="text"
              id="interesse"
              rows="4"
              cols="50"
              placeholder="Olá, estou interessado em..."
              required
            />
          </div>
          <Button type="submit" buttonStyle="default">
            Enviar Agora
          </Button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
