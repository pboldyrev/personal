import "../styles/Footer.css";
import Button from "./Button";
import { Mixpanel } from "../services/mixpanel";
import { MIXPANEL_EVENTS } from "../constants/constants.ts";

function Footer() {
  const resumeClicked = () => {
    Mixpanel.track(MIXPANEL_EVENTS.RESUME_CLICKED, { area: "header" });
  };

  return (
    <div className="mt-5 mt-sm-4 mt-md-5 mb-5 d-flex flex-row flex-wrap gap-2 justify-content-center">
      <Button
        type="primary"
        icon="fa-brands fa-linkedin"
        text={"LinkedIn"}
        link="https://linkedin.com/in/paulboldyrev"
      />
      <Button
        type="primary"
        icon="fa-brands fa-github"
        text={"GitHub"}
        link="https://github.com/pboldyrev"
      />
      <Button
        type="primary"
        icon="fa-solid fa-file-lines"
        text={"Resume"}
        link="/resume.pdf"
        onClick={resumeClicked()}
      />
    </div>
  );
}

export default Footer;
