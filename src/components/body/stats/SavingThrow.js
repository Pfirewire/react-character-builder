import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setAbilityScore, setSavingThrow} from "../../../store/slices/characterSlice";


function SavingThrow({type, abilityScore, isProficient}) {
    const dispatch = useDispatch();
    const {proficiencyBonus} = useSelector(state => state.character);

    const handleIsProficientChange = e => {
        dispatch(setAbilityScore({
            stat: type,
            key: 'isProficient',
            value: e.target.checked,
        }));
    };

    const prettyModifier = () =>{
        const bonus = Math.floor((abilityScore - 10)/2) + (isProficient ? proficiencyBonus : 0);
        return `${bonus >=0 ? '+' : ''}${bonus}`;
    };

    return(
        <SavingThrowWrapper>
            <input type={'checkbox'} value={isProficient} checked={isProficient} onChange={handleIsProficientChange} />
            <label>{prettyModifier()}{type}</label>
        </SavingThrowWrapper>
    );
}

export default SavingThrow;

const SavingThrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;