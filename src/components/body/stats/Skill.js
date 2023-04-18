import styled from "styled-components";
import {useSelector} from "react-redux";

function Skill({skillName, abilityScoreType, abilityScoreBonus, isProficient}) {
    const {proficiencyBonus} = useSelector(state => state.character);

    const handleIsProficientChange = e => {

    };

    const prettyModifier = () =>{
        console.log(abilityScoreBonus);
        const bonus = abilityScoreBonus + (isProficient ? proficiencyBonus : 0);
        console.log(bonus);
        return `${bonus >=0 ? '+' : ''}${bonus}`;
    };

    return(
        <SkillWrapper>
            <SkillInput type={'checkbox'} value={isProficient} checked={isProficient} onChange={handleIsProficientChange} />
            <SkillLabel>{prettyModifier()} {skillName}<SkillSpan>({abilityScoreType})</SkillSpan></SkillLabel>
        </SkillWrapper>
    );
}

export default Skill;

const SkillWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
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
  margin-left: 8px;
`;