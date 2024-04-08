import "../styles/Position.css";
import BILL from "../resources/logos/BILL.jpg";

function Position({ title = "", company = "", startDate = "", endDate = "" }) {
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

  return (
    <div className="position-wrapper p-3">
      <div className="d-flex gap-3 align-items-center">
        <img
          src={getLogo()}
          alt={`${company} logo`}
          className="position-logo"
        />
        <div className="d-flex flex-column">
          <span className="position-company">{company}</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}

export default Position;
