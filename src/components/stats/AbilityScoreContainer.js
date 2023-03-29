import AbilityScore from "./AbilityScore";
import {Container} from "../styles/Container.styled";
import styled from "styled-components";

function AbilityScoreContainer() {
    return(
        <Container>
            <AbilityScoreWrapper>
                <AbilityScore type={'STR'} />
                <AbilityScore type={'DEX'} />
                <AbilityScore type={'CON'} />
                <AbilityScore type={'WIS'} />
                <AbilityScore type={'INT'} />
                <AbilityScore type={'CHA'} />
            </AbilityScoreWrapper>
        </Container>
    );
}

export default AbilityScoreContainer;

const AbilityScoreWrapper = styled.div`
  display: flex;
`;