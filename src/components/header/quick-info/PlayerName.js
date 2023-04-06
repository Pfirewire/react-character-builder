import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setBackground} from "../../../store/slices/characterSlice";

function PlayerName() {
    const dispatch = useDispatch();
    const {playerName} = useSelector(state => state.character);

    const handlePlayerNameChange = e => {
        dispatch(setBackground(e.target.value));
    };

    return(
        <PlayerNameWrapper>
            <label>Player Name:</label>
            <input value={playerName} onChange={handlePlayerNameChange} />
        </PlayerNameWrapper>
    );
}

export default PlayerName;

const PlayerNameWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;