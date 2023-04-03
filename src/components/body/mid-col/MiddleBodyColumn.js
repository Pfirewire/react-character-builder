import styled from "styled-components";
import ArmorClass from "./ArmorClass";
import Initiative from "./Initiative";
import Speed from "./Speed";
import HitPoints from "./HitPoints";
import HitDice from "./HidDice";
import DeathSaves from "./DeathSaves";
import AttacksAndSpellcasting from "./AttacksAndSpellcasting";
import Equipment from "./Equipment";
import {BodyColumn} from "../../styles/BodyColumn.styled";

function MiddleBodyColumn() {
    return(
        <BodyColumn>
            <ACArmorAndSpeedWrapper>
                <ArmorClass />
                <Initiative />
                <Speed />
            </ACArmorAndSpeedWrapper>
            <HitPoints />
            <HitDiceAndDeathSavesWrapper>
                <HitDice />
                <DeathSaves />
            </HitDiceAndDeathSavesWrapper>
            <AttacksAndSpellcasting />
            <Equipment />
        </BodyColumn>
    );
}

export default MiddleBodyColumn;

const ACArmorAndSpeedWrapper = styled.div`
  display: flex;
  height: 100px;
  align-items: stretch;
`;

const HitDiceAndDeathSavesWrapper = styled.div`
  display: flex;
  height: 100px;
  align-items: stretch;
`;