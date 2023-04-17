import styled from "styled-components";
import {useSelector} from "react-redux";

function Skills() {
    const {skills} = useSelector(state => state.character);

    const renderedSkills = skills.map(skill => {

    });

    return(
        <SkillsWrapper>
            Skills
        </SkillsWrapper>
    );
}

export default Skills;

const SkillsWrapper = styled.div`
  height: 510px;
`;