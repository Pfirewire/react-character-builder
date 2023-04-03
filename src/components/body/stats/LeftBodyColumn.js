import styled from "styled-components";
import AbilityScoreContainer from "./AbilityScoreContainer";
import OtherAbilityStats from "./OtherAbilityStats";
import PassiveStats from "./PassiveStats";
import OtherProficiencies from "./OtherProficiencies";
import {BodyColumn} from "../../styles/BodyColumn.styled";

function LeftBodyColumn() {
    return(
        <BodyColumn>
            <LeftStatsTopWrapper>
                <AbilityScoreContainer />
                <OtherAbilityStats />
            </LeftStatsTopWrapper>
            <LeftStatsBottomWrapper>
                <PassiveStats />
                <OtherProficiencies />
            </LeftStatsBottomWrapper>
        </BodyColumn>
    );
}

export default LeftBodyColumn;

const LeftStatsTopWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
`;

const LeftStatsBottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;