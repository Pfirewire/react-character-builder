import styled from "styled-components";

function PlayerName() {
    return(
        <PlayerNameWrapper>
            PlayerName
        </PlayerNameWrapper>
    );
}

export default PlayerName;

const PlayerNameWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;