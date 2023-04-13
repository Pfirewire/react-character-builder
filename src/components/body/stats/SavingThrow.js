import styled from "styled-components";
import {useDispatch} from "react-redux";
import {setSavingThrow} from "../../../store/slices/characterSlice";


function SavingThrow({type, bonus, isProficient}) {
    const dispatch = useDispatch();
    // console.log(`Bonus: ${bonus}, proficient: ${isProficient}`);

    const handleBonusChange = e => {
        dispatch(setSavingThrow({
            stat: type,
            key: 'bonus',
            value: parseInt(e.target.value),
        }));
    };

    const handleIsProficientChange = e => {
        dispatch(setSavingThrow({
            stat: type,
            key: 'isProficient',
            value: e.target.checked,
        }));
    };

    return(
        <SavingThrowWrapper>
            <input type={'checkbox'} value={isProficient} checked={isProficient} onChange={handleIsProficientChange} />
            <input type={'number'} value={bonus} onChange={handleBonusChange} />
            <label>{type}</label>
        </SavingThrowWrapper>
    );
}

export default SavingThrow;

const SavingThrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;