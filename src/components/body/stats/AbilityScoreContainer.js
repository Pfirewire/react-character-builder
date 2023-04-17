import AbilityScore from "./AbilityScore";
import styled from "styled-components";
import {useSelector} from "react-redux";
import SavingThrow from "./SavingThrow";

function AbilityScoreContainer() {
    const {abilityScore} = useSelector(state => state.character);

    const renderedAbilityScores = () => {
        let renderedAbilityScores = [];
        for(const key of Object.entries(abilityScore)) {
            renderedAbilityScores.push(
                <AbilityScore key={key[0]} type={key[0]} score={abilityScore[key[0]].value} />
            );
        }
        return renderedAbilityScores;
    };

    return(
        <AbilityScoreWrapper>
            {renderedAbilityScores()}
        </AbilityScoreWrapper>
    );
}

export default AbilityScoreContainer;

const AbilityScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;