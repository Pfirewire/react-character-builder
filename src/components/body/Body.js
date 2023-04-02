import styled from "styled-components";
import AbilityScoreContainer from "./stats/AbilityScoreContainer";
import OtherAbilityStats from "./stats/OtherAbilityStats";
import PassiveStats from "./stats/PassiveStats";
import OtherProficiencies from "./stats/OtherProficiencies";
import ArmorClass from "./mid-col/ArmorClass";
import Initiative from "./mid-col/Initiative";
import Speed from "./mid-col/Speed";
import HitPoints from "./mid-col/HitPoints";

function Body() {
    return(
        <BodyWrapper>
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
            <BodyColumn>
                <ACArmorAndSpeedWrapper>
                    <ArmorClass />
                    <Initiative />
                    <Speed />
                </ACArmorAndSpeedWrapper>
                <HitPoints />
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
  display: flex;
  flex-direction: column;
`;

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

const ACArmorAndSpeedWrapper = styled.div`
  display: flex;
  height: 100px;
  align-items: stretch;
`;