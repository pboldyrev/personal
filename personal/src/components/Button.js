import "../styles/Button.css";

function Button({ text, type = "primary", onClick }) {
  return (
    <button className={"app-btn app-btn-" + type} onClick={() => onClick()}>
      {text}
    </button>
  );
}

export default Button;
