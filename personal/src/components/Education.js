import "../styles/Education.css";
import Heading from "./Heading.js";
import { EDUCATION } from "../constants/strings.ts";
import Line from "./Line.js";
import SCU from "../resources/logos/SCU.png";

function Education() {
  return (
    <div className="mt-5">
      <Line />

      <div className="my-3">
        <Heading content={EDUCATION.TITLE} />
      </div>

      <div className="education-wrapper g-0 p-4 d-flex align-items-center">
        <img
          src={SCU}
          alt="Santa Clara University"
          className="education-img"
        />
        <div className="d-flex flex-column ps-4">
          <Heading content={EDUCATION.SCU_NAME} size="s" />
          <p className="m-0"><b>B.S. in Computer Science and Engineering</b></p>
          <p className="m-0">Member Tau Beta Pi, Epsilon Pi Epsilon</p>
          <p className="m-0">GPA: 3.9/4.0</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
