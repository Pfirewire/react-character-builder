import styled from "styled-components";
import AbilityScoreContainer from "./stats/AbilityScoreContainer";
import OtherAbilityStats from "./stats/OtherAbilityStats";

function Body() {
    return(
        <BodyWrapper>
            <BodyColumn>
                <LeftStatsWrapper>
                    <AbilityScoreContainer />
                    <OtherAbilityStats />
                </LeftStatsWrapper>
            </BodyColumn>
            <BodyColumn>
                Middle Column
            </BodyColumn>
            <BodyColumn>
                Right Column
            </BodyColumn>
        </BodyWrapper>
    );
}

export default Body;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const BodyColumn = styled.div`
  width: 320px;
`;

const LeftStatsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
`;