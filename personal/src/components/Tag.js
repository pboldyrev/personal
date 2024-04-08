import "../styles/Tag.css";

function Tag({ text, type = "primary" }) {
  return <span className={`tag tag-${type}`}>{text}</span>;
}

export default Tag;
