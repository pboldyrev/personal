import "../styles/Tag.css";

function Tag({ text, yoe = "2 yrs", type = "primary" }) {
  return (
    <div className={`tag tag-${type}`}>
      {text}
      {/* <span class="tag-tooltip">Experience: {yoe}</span> */}
    </div>
  );
}

export default Tag;
