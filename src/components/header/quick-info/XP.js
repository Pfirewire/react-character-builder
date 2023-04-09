import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setXP, setXPMax} from "../../../store/slices/characterSlice";
import {BiggerInput} from "../../styles/BiggerInput.styled";

function XP() {
    const dispatch = useDispatch();
    const {xp} = useSelector(state => state.character);

    const handleXPChange = e => {
        dispatch(setXP(e.target.value));
    };

    const handleMaxXPChange = e => {
        dispatch(setXPMax(e.target.value));
    };

    return(
        <XPWrapper>
            <XPFieldWrapper>
                <BiggerInput type={'number'} value={xp[0]} onChange={handleXPChange} />
                <div>/</div>
                <BiggerInput type={'number'} value={xp[1]} onChange={handleMaxXPChange} />
            </XPFieldWrapper>
            <label>XP (current / max)</label>
        </XPWrapper>
    );
}

export default XP;

const XPWrapper = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const XPFieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
