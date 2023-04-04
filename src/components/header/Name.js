import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {setCharacterName} from "../../store";

function Name() {
    const dispatch = useDispatch();
    const {characterName} = useSelector(state => state.character);

    const handleChange = (e) => {
        dispatch(setCharacterName(e.target.value));
    };

    return(
        <NameWrapper>
            <label>Character Name: </label>
            <input value={characterName} onChange={handleChange} />
        </NameWrapper>
    );
}

export default Name;

const NameWrapper = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;