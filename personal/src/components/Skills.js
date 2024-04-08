import "../styles/Skills.css";
import Heading from "./Heading";
import Tag from "./Tag.js";
import Input from "./Input.js";
import Banner from "./Banner.js";
import { SKILLS } from "../constants/strings.ts";
import { SKILL_LIST } from "../constants/data.ts";
import { useEffect, useState } from "react";

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
      <div className="mb-3">
        <Heading content={SKILLS.TITLE} />
      </div>
      <Input
        placeholder={SKILLS.SEARCH_PLACEHOLDER}
        setValue={setSearchedSkill}
      />
      {hasSkills
        ? Object.keys(displaySkills).map((type) => (
            <div key={type} className="row mt-4">
              <div className="col-3">
                <b>{type}</b>
              </div>
              <div className="col-9">
                <div className="d-flex flex-wrap gap-1">
                  {displaySkills[type].map((skill) => (
                    <Tag key={skill.id} text={skill.title} />
                  ))}
                </div>
              </div>
            </div>
          ))
        : <div className="mt-4">
            <Banner type="danger" text="I may not have that skill just yet, but I'm always hungry to learn!" />
          </div>}
    </div>
  );
}

export default Skills;
