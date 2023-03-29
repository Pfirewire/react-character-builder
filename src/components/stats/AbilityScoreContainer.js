import AbilityScore from "./AbilityScore";
import {Container} from "../styles/Container.styled";

function AbilityScoreContainer() {
    return(
        <Container>
            <AbilityScore type={'STR'} />
            <AbilityScore type={'DEX'} />
            <AbilityScore type={'CON'} />
            <AbilityScore type={'WIS'} />
            <AbilityScore type={'INT'} />
            <AbilityScore type={'CHA'} />
        </Container>
    );
}

export default AbilityScoreContainer;