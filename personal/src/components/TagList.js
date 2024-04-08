import "../styles/TagList.css";
import Tag from "./Tag";

function TagList({ tags, type = "primary" }) {
  return (
    <div className="d-flex w-100 flex-wrap gap-1">
      {tags.map((tag) => (
        <Tag key={tag} text={tag} type={type} />
      ))}
    </div>
  );
}

export default TagList;
