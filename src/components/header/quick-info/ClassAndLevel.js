import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setCharacterClass, setLevel} from "../../../store/slices/characterSlice";

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
            <ClassWrapper>
                <label>Class:</label>
                <input value={characterClass} onChange={handleCharacterClassChange} />
            </ClassWrapper>
            <LevelWrapper>
                <label>Level:</label>
                <input type={"number"} max={20} value={level} onChange={handleLevelChange} />
            </LevelWrapper>
        </ClassAndLevelWrapper>
    );
}

export default ClassAndLevel;

const ClassAndLevelWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  align-items: stretch;
`;

const ClassWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
`;

const LevelWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
`;