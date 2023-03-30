import styled from "styled-components";
import Inspiration from "./Inspiration";
import ProficiencyBonus from "./ProficiencyBonus";
import SavingThrows from "./SavingThrows";
import Skills from "./Skills";

function OtherAbilityStats() {
    return(
        <OtherAbilityStatsWrapper>
            <Inspiration />
            <ProficiencyBonus />
            <SavingThrows />
            <Skills />
        </OtherAbilityStatsWrapper>
    );
}

export default OtherAbilityStats;

const OtherAbilityStatsWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
`;