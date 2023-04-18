import styled from "styled-components";
import {useSelector} from "react-redux";
import Skill from "./Skill";

function Skills() {
    const {abilityScore} = useSelector(state => state.character);

    const renderedSkills = () => {
        let skills = [];
        for(const key of Object.entries(abilityScore)) {
            console.log(key);
            skills.push(...key[1].skills.map(skill => {
                return {
                    skillName: skill.name,
                    abilityScoreType: key[0],
                    abilityScore: key[1].score,
                    isProficient: key[1].isProficient,
                };
            }));
        }
        skills.sort((a, b) => a.skillName.localeCompare(b.skillName));
        return skills.map(skill => {
            return (
                <Skill key={skill.skillName} skillName={skill.skillName} abilityScoreType={skill.abilityScoreType} abilityScore={skill.abilityScore} isProficient={skill.isProficient} />
            );
        });
    };

    return(
        <SkillsWrapper>
            <div>
                {renderedSkills()}
            </div>
            <p>Skills</p>
        </SkillsWrapper>
    );
}

export default Skills;

const SkillsWrapper = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;