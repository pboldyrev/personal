import "../styles/Position.css";
import { useState } from "react";
import BILL from "../resources/logos/BILL.jpg";
import VIZIO from "../resources/logos/VIZIO.jpg";
import Microsoft from "../resources/logos/Microsoft.jpg";
import TagList from "./TagList";
import { Mixpanel } from "../services/mixpanel";
import { MIXPANEL_EVENTS } from "../constants/constants.ts";

function Position({
  company = "",
  startDate = "",
  endDate = "",
  positions = [],
}) {
  const [isOpened, setIsOpened] = useState(false);

  const getLogo = () => {
    let logo = null;

    switch (company) {
      case "BILL":
        logo = BILL;
        break;
      case "VIZIO":
        logo = VIZIO;
        break;
      case "Microsoft":
        logo = Microsoft;
        break;
      default:
        logo = null;
    }

    return logo;
  };

  const toggleView = () => {
    setIsOpened((prev) => {
      if (!prev) {
        Mixpanel.track(MIXPANEL_EVENTS.EXPANDED_EXPERIENCE, {
          company: company,
        });
      }
      return !prev;
    });
  };

  return (
    <div className="position-wrapper p-4" onClick={() => toggleView()}>
      <div className="d-flex gap-4 align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={getLogo()}
            alt={`${company} logo`}
            className="position-logo"
          />
          <div className="d-flex flex-column ms-3">
            <span className="position-title">{company}</span>
            <span>
              {startDate} - {endDate}
            </span>
            <span className="expand-link">{!isOpened && "view more"}</span>
          </div>
        </div>
        <span className="position-button">{isOpened ? "-" : "+"}</span>
      </div>
      {isOpened && (
        <div className="d-flex flex-column">
          {positions.map((position) => {
            return (
              <div key={position.title} className="d-flex flex-column mt-4">
                <span className="position-title">{position.title}</span>
                <span className="mb-2">
                  {position.startDate} - {position.endDate}
                </span>
                <TagList tags={position.tags} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Position;
