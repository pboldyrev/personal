import "../styles/Button.css";

function Button({ text, type = "primary", onClick = () => {} }, link = "/") {
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
