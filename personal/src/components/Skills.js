import "../styles/Skills.css";
import Heading from "./Heading";
import Input from "./Input.js";
import Banner from "./Banner.js";
import { SKILLS } from "../constants/strings.ts";
import { SKILL_LIST } from "../constants/data.ts";
import { useEffect, useState } from "react";
import TagList from "./TagList.js";
import Line from "./Line.js";

function Skills() {
  const [searchedSkill, setSearchedSkill] = useState("");
  const [displaySkills, setDisplaySkills] = useState({});
  const [hasSkills, setHasSkills] = useState(true);

  const updateDisplaySkills = (skills) => {
    setDisplaySkills(() => {
      return skills.reduce((group, skill) => {
        const { type } = skill;
        group[type] = group[type] ?? [];
        group[type].push(skill);
        return group;
      }, {});
    });
  };

  useEffect(() => {
    if (!searchedSkill) updateDisplaySkills(SKILL_LIST);
    else {
      const filteredSkills = SKILL_LIST.filter((skill) =>
        skill.title.toLowerCase().includes(searchedSkill.toLowerCase())
      );

      updateDisplaySkills(filteredSkills);
    }
  }, [searchedSkill]);

  useEffect(() => {
    setHasSkills(!!Object.keys(displaySkills).length);
  }, [displaySkills]);

  return (
    <div className="mt-5">
      <Line />
      <div className="my-3">
        <Heading content={SKILLS.TITLE} />
      </div>
      <Input
        placeholder={SKILLS.SEARCH_PLACEHOLDER}
        setValue={setSearchedSkill}
      />
      {hasSkills ? (
        Object.entries(displaySkills).map(([type, skills]) => (
          <div key={type} className="row mt-4">
            <div className="col-3">
              <b>{type}</b>
            </div>
            <div className="col-9">
              <TagList tags={skills.map((skill) => skill.title)}></TagList>
            </div>
          </div>
        ))
      ) : (
        <div className="mt-4">
          <Banner type="danger" text={SKILLS.EMPTY_LIST} />
        </div>
      )}
    </div>
  );
}

export default Skills;
