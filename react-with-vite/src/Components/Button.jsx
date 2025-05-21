import "./Button.css";
import Seta from "../assets/Vector.svg";

function Button({ arrow, buttonStyle, children, ...props }) {
  return (
    <>
      <button className={`button ${buttonStyle}`} {...props}>
        {children} {arrow && <img src={Seta} />}
      </button>
    </>
  );
}

export default Button;
