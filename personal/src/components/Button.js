import "../styles/Button.css";

function Button({ text, link = "#", type = "primary", onClick = () => {} }) {
  return (
    <a
      href={link}
      className={"app-btn app-btn-" + type}
      onClick={() => onClick()}
    >
      {text}
    </a>
  );
}

export default Button;
