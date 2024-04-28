import "../styles/Button.css";

function Button({
  text,
  icon = "",
  link = "",
  type = "primary",
  onClick = () => {},
}) {
  return link ? (
    <a
      href={link}
      target={link.includes("#") ? "" : "_blank"}
      rel="noreferrer"
      className={"app-btn app-btn-" + type}
      onClick={() => onClick()}
    >
      {icon && <i className={icon}></i>}
      {text}
    </a>
  ) : (
    <button className={"app-btn app-btn-" + type} onClick={() => onClick()}>
      {icon && <i className={icon}></i>}
      {text}
    </button>
  );
}

export default Button;
