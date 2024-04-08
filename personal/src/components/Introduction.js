import "../styles/Introduction.css";
import Heading from "./Heading";
import Button from "./Button";
import Line from "./Line.js";
import profile from "../resources/profile.jpg";
import { INTRODUCTION as TEXTS } from "../constants/strings.ts";

function Introduction() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex gap-4 align-items-center">
        <img className="profile-img" src={profile} alt="Paul Boldyrev" />
        <div className="d-flex flex-column">
          <Heading
            content={TEXTS.TITLE}
            subtitle={TEXTS.SUBTITLE}
            tagText={TEXTS.TAG}
          />
        </div>
      </div>
      <div className="d-flex gap-2 my-4 align-items-center">
        <Line />
        <Button
          text={TEXTS.SECONDARY_CTA}
          type="secondary"
          onClick={() => alert("Hello world")}
        />
        <Button
          text={TEXTS.PRIMARY_CTA}
          type="primary"
          onClick={() => alert("Hello world")}
        />
      </div>
    </div>
  );
}

export default Introduction;
