import "../styles/Experience.css";
import Heading from "./Heading";
import Position from "./Position.js";
import { EXPERIENCE } from "../constants/strings.ts";

function Experience() {
  const positions = [
    {
      company: "BILL",
      startDate: "Jun 2022",
      endDate: "Current",
      positions: [
        {
          title: "Software Engineer",
          startDate: "Jul 2023",
          endDate: "Current",
        },
        {
          title: "Software Engineer Intern",
          startDate: "Jun 2022",
          endDate: "Aug 2022",
        },
      ],
    },
    {
      company: "VIZIO",
      startDate: "Jun 2021",
      endDate: "Jun 2022",
      positions: [
        {
          title: "Software Engineer (Contract)",
          startDate: "Aug 2021",
          endDate: "Jun 2022",
        },
        {
          title: "Software Engineer Intern",
          startDate: "Jun 2021",
          endDate: "Aug 2021",
        },
      ],
    },
    {
      company: "Microsoft",
      startDate: "Jun 2019",
      endDate: "Aug 2019",
      positions: [
        {
          title: "Product Management Intern",
          startDate: "Jun 2019",
          endDate: "Aug 2019",
        },
      ],
    },
  ];
  return (
    <>
      <Heading content={EXPERIENCE.TITLE} />
      <div className="d-flex flex-column gap-2 my-3">
        {positions.map((position) => (
          <Position {...position} />
        ))}
      </div>
    </>
  );
}

export default Experience;
