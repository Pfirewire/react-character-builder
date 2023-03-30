import AbilityScore from "./AbilityScore";
import styled from "styled-components";

function AbilityScoreContainer() {
    return(
        <AbilityScoreWrapper>
            <AbilityScore type={'STR'} />
            <AbilityScore type={'DEX'} />
            <AbilityScore type={'CON'} />
            <AbilityScore type={'WIS'} />
            <AbilityScore type={'INT'} />
            <AbilityScore type={'CHA'} />
        </AbilityScoreWrapper>
    );
}

export default AbilityScoreContainer;

const AbilityScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;