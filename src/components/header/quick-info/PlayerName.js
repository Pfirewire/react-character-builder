import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setBackground} from "../../../store/slices/characterSlice";
import {BiggerInput} from "../../styles/BiggerInput.styled";

function PlayerName() {
    const dispatch = useDispatch();
    const {playerName} = useSelector(state => state.character);

    const handlePlayerNameChange = e => {
        dispatch(setBackground(e.target.value));
    };

    return(
        <PlayerNameWrapper>
            <BiggerInput value={playerName} onChange={handlePlayerNameChange} />
            <label>Player Name</label>
        </PlayerNameWrapper>
    );
}

export default PlayerName;

const PlayerNameWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`;