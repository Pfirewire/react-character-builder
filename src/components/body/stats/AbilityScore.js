import styled from "styled-components";

function AbilityScore({type}) {
    return(
        <AbilityScoreContainer>
            {type}
        </AbilityScoreContainer>
    );
}

export default AbilityScore;

const AbilityScoreContainer = styled.div`
  width: 80px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;