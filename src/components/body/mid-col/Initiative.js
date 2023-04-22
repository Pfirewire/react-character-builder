import styled from "styled-components";
import {useSelector} from "react-redux";

function Initiative() {
    const {bonus} = useSelector(state => state.character.abilityScore.DEX);

    return(
        <InitiativeWrapper>
            <InitiativeValueWrapper>
                {bonus >= 0 ? `+${bonus}` : bonus}
            </InitiativeValueWrapper>
            <InitiativeTextWrapper>
                Initiative
            </InitiativeTextWrapper>
        </InitiativeWrapper>
    );
}

export default Initiative;

const InitiativeWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InitiativeValueWrapper = styled.div`
  flex-grow: 1;
  font-size: 3em;
  display: flex;
  align-items: center;
`;

const InitiativeTextWrapper = styled.p`
`;