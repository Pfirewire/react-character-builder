import styled from "styled-components";
import AbilityScoreContainer from "./stats/AbilityScoreContainer";

function Body() {
    return(
        <BodyWrapper>
            <AbilityScoreContainer />
        </BodyWrapper>
    );
}

export default Body;

const BodyWrapper = styled.div`
  
`;