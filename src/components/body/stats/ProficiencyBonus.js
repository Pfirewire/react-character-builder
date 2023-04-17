import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setProficiencyBonus} from "../../../store/slices/characterSlice";

function ProficiencyBonus() {
    const dispatch = useDispatch();
    const {proficiencyBonus} = useSelector(state => state.character);

    const handleProficiencyBonusChange = e => {
        dispatch(setProficiencyBonus(parseInt(e.target.value)));
    };

    return(
        <ProficiencyBonusWrapper>
            <div>
                <span>+</span>
                <ProficiencyBonusInput type={'number'} min={'0'} max={'6'} value={proficiencyBonus} onChange={handleProficiencyBonusChange} />
            </div>
            <label>ProficiencyBonus</label>
        </ProficiencyBonusWrapper>
    );
}

export default ProficiencyBonus;

const ProficiencyBonusWrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProficiencyBonusInput = styled.input`
  width: 36px;
`;