import styled from "styled-components";
import {useSelector} from "react-redux";

function Skill({name, abilityScore, score, isProficient}) {
    const {proficiencyBonus} = useSelector(state => state.character);

    const prettyModifier = () =>{
        const bonus = Math.floor((score - 10)/2) + (isProficient ? proficiencyBonus : 0);
        return `${bonus >=0 ? '+' : ''}${bonus}`;
    };

    return(
        <SkillWrapper>
            <SkillInput type={'checkbox'} value={isProficient} checked={isProficient} />
            <SkillLabel>{prettyModifier()} {name}<SkillSpan>({abilityScore})</SkillSpan></SkillLabel>
        </SkillWrapper>
    );
}

export default Skill;

const SkillWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillInput = styled.input`
  width: 30px;
`;

const SkillLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1em;
  height: 23px;
  width: 200px;
`;

const SkillSpan = styled.span`
  color: grey;
  margin-left: 10px;
`;