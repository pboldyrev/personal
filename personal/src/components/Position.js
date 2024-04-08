import "../styles/Position.css";
import { useState } from "react";
import BILL from "../resources/logos/BILL.jpg";

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
      default:
        logo = null;
    }

    return logo;
  };

  const toggleView = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div className="position-wrapper p-3" onClick={() => toggleView()}>
      <div className="d-flex gap-4 align-items-center">
        <img
          src={getLogo()}
          alt={`${company} logo`}
          className="position-logo"
        />
        <div className="d-flex flex-column">
          <span className="position-title">{company}</span>
          <span>
            {startDate} - {endDate}
          </span>
        </div>
      </div>
      {isOpened && (
        <div className="d-flex flex-column mt-4">
          {positions.map((position) => {
            return (
              <div className="d-flex flex-column mb-3">
                <span className="position-title">{position.title}</span>
                <span>{position.startDate} - {position.endDate}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Position;
