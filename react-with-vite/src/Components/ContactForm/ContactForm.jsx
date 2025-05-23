import "./ContactForm.css";
import Button from "../Button";

function ContactForm() {
  return (
    <>
      <form action="" method="get">
        <h1>Nós amamamos encontrar novas pessoas e ajudá-las</h1>
        <div className="form-nameandemail">
          <input type="text" name="name" id="name" placeholder="Nome *" required />
        </div>
        <div className="form-nameandemail">
          <input type="text" name="name" id="name" placeholder="Email *" required />
        </div>
        <div className="form-text">
          <input type="text" name="name" id="name" placeholder="Olá, estou interessado em..." required />
        </div>
        <Button buttonStyle="default">Enviar Agora</Button>
      </form>
    </>
  );
}

export default ContactForm;
