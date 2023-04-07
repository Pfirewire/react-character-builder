import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setCharacterClass, setLevel} from "../../../store/slices/characterSlice";
import {BiggerInput} from "../../styles/BiggerInput.styled";

function ClassAndLevel() {
    const dispatch = useDispatch();
    const {characterClass, level} = useSelector(state => state.character);

    const handleCharacterClassChange = e => {
        dispatch(setCharacterClass(e.target.value));
    };

    const handleLevelChange = e => {
        dispatch(setLevel(e.target.value));
    };

    return(
        <ClassAndLevelWrapper>
            <LevelWrapper>
                <BiggerInput type={"number"} max={20} value={level} onChange={handleLevelChange} />
                <label>Level</label>
            </LevelWrapper>
            <ClassWrapper>
                <BiggerInput value={characterClass} onChange={handleCharacterClassChange} />
                <label>Class</label>
            </ClassWrapper>
        </ClassAndLevelWrapper>
    );
}

export default ClassAndLevel;

const ClassAndLevelWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
  flex: 1 0 0;
`;

const ClassWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LevelWrapper = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
`;