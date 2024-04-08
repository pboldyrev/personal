import "../styles/Introduction.css";
import Heading from "./Heading";
import Button from "./Button";
import Line from "./Line.js";
import Tag from "./Tag.js";
import profile from "../resources/profile.jpg";
import { INTRODUCTION as TEXTS } from "../constants/strings.ts";

function Introduction() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex gap-4 align-items-center">
        <img className="profile-img" src={profile} alt="Paul Boldyrev" />
        <div className="d-flex flex-column gap-2">
          <Heading content={TEXTS.TITLE} subtitle={TEXTS.SUBTITLE} />
          <div className="d-flex gap-2">
            <Tag type="primary" text={TEXTS.AVALIABLE_TAG} />
            <Tag type="primary" text={TEXTS.LOCATION_TAG} />
          </div>
        </div>
      </div>
      <div className="d-flex gap-2 mt-4 align-items-center">
        <Line />
        <Button text={TEXTS.SECONDARY_CTA} type="secondary" link="#work-experience" />
        <Button
          text={TEXTS.PRIMARY_CTA}
          type="primary"
          link="https://calendly.com/paulboldyrev/30min"
        />
      </div>
    </div>
  );
}

export default Introduction;
