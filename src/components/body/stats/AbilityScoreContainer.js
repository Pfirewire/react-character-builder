import AbilityScore from "./AbilityScore";
import styled from "styled-components";
import {useSelector} from "react-redux";

function AbilityScoreContainer() {
    const {abilityScore} = useSelector(state => state.character);

    return(
        <AbilityScoreWrapper>
            <AbilityScore type={'STR'} score={[abilityScore.STR]} />
            <AbilityScore type={'DEX'} score={[abilityScore.DEX]} />
            <AbilityScore type={'CON'} score={[abilityScore.CON]} />
            <AbilityScore type={'WIS'} score={[abilityScore.WIS]} />
            <AbilityScore type={'INT'} score={[abilityScore.INT]} />
            <AbilityScore type={'CHA'} score={[abilityScore.CHA]} />
        </AbilityScoreWrapper>
    );
}

export default AbilityScoreContainer;

const AbilityScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;