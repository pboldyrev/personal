import "../styles/Projects.css";
import Heading from "./Heading.js";
import { PROJECTS } from "../constants/strings.ts";
import Line from "./Line.js";
import slide1 from "../resources/finacle1.png";
import slide2 from "../resources/finacle3.png";
import { useState } from "react";
import Button from "./Button";
import TagList from "./TagList.js";

function Projects() {
  const SLIDES = [slide1, slide2];

  const [curSlide, setCurSlide] = useState(0);

  const setPreviousSlide = () => {
    setCurSlide((cur) => {
      if (cur === 0) return 1;
      return --cur;
    });
  };

  const setNextSlide = () => {
    setCurSlide((cur) => {
      if (cur === 1) return 0;
      return ++cur;
    });
  };

  return (
    <div className="mt-5">
      <Line />

      <div className="my-3">
        <Heading content={PROJECTS.TITLE} />
      </div>

      <div className="projects-wrapper p-4 g-0 d-flex flex-column">
        <img className="projects-img" src={SLIDES[curSlide]} alt="Finacle" />
        <div className="mt-3 d-flex flex-column gap-3">
          <div className="d-flex gap-2">
            <Button
              icon="fa-solid fa-arrow-left"
              type="secondary"
              onClick={() => setPreviousSlide()}
            />
            <Button
              icon="fa-solid fa-arrow-right"
              type="secondary"
              onClick={() => setNextSlide()}
            />
          </div>
          <div className="d-flex flex-column gap-1">
            <Heading
              content={PROJECTS.FINACLE}
              subtitle={PROJECTS.FINACLE_SUBTITLE}
              size="s"
            />
            <TagList tags={PROJECTS.FINACLE_SKILLS} />
          </div>
          <div className="d-flex gap-2 flex-wrap">
            <Button text={PROJECTS.PRIMARY_CTA} link={PROJECTS.FINACLE_LINK} />
            <Button
              text={PROJECTS.SECONDARY_CTA}
              type="secondary"
              link={PROJECTS.FINACLE_CODE}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
