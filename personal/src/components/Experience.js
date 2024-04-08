import "../styles/Experience.css";
import Heading from "./Heading";
import Position from "./Position.js";
import { EXPERIENCE } from "../constants/strings.ts";
import { POSITIONS } from "../constants/data.ts";

function Experience() {
  return (
    <div className="mt-5" id="work-experience">
      <Heading content={EXPERIENCE.TITLE} />
      <div className="d-flex flex-column gap-2 my-3">
        {POSITIONS.map((position) => (
          <Position key={position.id} {...position} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
