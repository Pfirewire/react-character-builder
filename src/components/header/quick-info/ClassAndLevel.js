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
                <input value={characterClass} onChange={handleCharacterClassChange} />
                <label>Class</label>
            </ClassWrapper>
            <LevelWrapper>
                <input type={"number"} max={20} value={level} onChange={handleLevelChange} />
                <label>Level</label>
            </LevelWrapper>
        </ClassAndLevelWrapper>
    );
}

export default ClassAndLevel;

const ClassAndLevelWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
`;

const ClassWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const LevelWrapper = styled.div`
  width: 60px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
`;