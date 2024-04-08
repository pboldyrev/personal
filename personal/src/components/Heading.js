import "../styles/Heading.css";
import Tag from "./Tag";

function Heading({ content, subtitle = "", size = "m", tagText = "" }) {
  let headingClasses = `app-heading app-heading-${size}`;
  let subheadingClasses = `app-subheading app-subheading-${size}`;
  return (
    <div className="d-flex flex-column">
      <div className="d-flex align-items-center gap-3">
        <span className={headingClasses}>{content}</span>
        {tagText && <Tag text={tagText} />}
      </div>
      {subtitle && <span className={subheadingClasses}>{subtitle}</span>}
    </div>
  );
}

export default Heading;
