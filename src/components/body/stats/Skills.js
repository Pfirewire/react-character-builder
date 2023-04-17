import styled from "styled-components";
import {useSelector} from "react-redux";
import Skill from "./Skill";

function Skills() {
    const {skills, abilityScore} = useSelector(state => state.character);

    const renderedSkills = skills.map(skill => {
        return (
            <Skill key={skill.name} name={skill.name} abilityScore={skill.abilityScore} bonus={abilityScore[skill.abilityScore].score} isProficient={abilityScore[skill.abilityScore].isProficient} />
        );
    });

    return(
        <SkillsWrapper>
            {renderedSkills}
        </SkillsWrapper>
    );
}

export default Skills;

const SkillsWrapper = styled.div`
  height: 510px;
`;