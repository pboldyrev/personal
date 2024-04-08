import "../styles/Experience.css";
import Heading from "./Heading.js";
import { PROJECTS } from "../constants/strings.ts";

function Projects() {
  return (
    <div className="mt-5" id="work-experience">
      <Heading content={PROJECTS.TITLE} />
      Not done yet!
    </div>
  );
}

export default Projects;
