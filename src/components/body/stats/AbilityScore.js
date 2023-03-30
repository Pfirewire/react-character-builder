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
  border: 2px solid black;
  border-radius: 5px;
`;