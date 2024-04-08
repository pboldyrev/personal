import "../styles/TopBar.css";
import Heading from "./Heading";
import STRINGS from "../constants/strings.ts";

function TopBar() {
  return (
    <div>
      <Heading content={STRINGS.TITLE} bold={true} />
    </div>
  );
}

export default TopBar;
