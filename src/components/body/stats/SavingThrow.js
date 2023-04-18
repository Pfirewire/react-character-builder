import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setAbilityScore, setSavingThrow} from "../../../store/slices/characterSlice";


function SavingThrow({name, abilityScoreType, abilityScoreBonus, isProficient}) {
    const dispatch = useDispatch();
    const {proficiencyBonus} = useSelector(state => state.character);

    const handleIsProficientChange = e => {
        dispatch(setAbilityScore({
            stat: abilityScoreType,
            key: 'isProficient',
            value: e.target.checked,
        }));
    };

    const prettyModifier = () =>{
        const bonus = abilityScoreBonus + (isProficient ? proficiencyBonus : 0);
        return `${bonus >=0 ? '+' : ''}${bonus}`;
    };

    return(
        <SavingThrowWrapper>
            <SavingThrowInput type={'checkbox'} value={isProficient} checked={isProficient} onChange={handleIsProficientChange} />
            <SavingThrowLabel>{prettyModifier()} {name}</SavingThrowLabel>
        </SavingThrowWrapper>
    );
}

export default SavingThrow;

const SavingThrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
`;

const SavingThrowInput = styled.input`
  width: 30px;
`;

const SavingThrowLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1em;
  height: 23px;
  width: 200px;
`;