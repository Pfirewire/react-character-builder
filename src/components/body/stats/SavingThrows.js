import styled from "styled-components";
import SavingThrow from "./SavingThrow";
import {useSelector} from "react-redux";

function SavingThrows() {
    const {savingThrow} = useSelector(state => state.character);

    return(
        <SavingThrowsWrapper>
            <SavingThrow type={'STR'} bonus={savingThrow.STR.bonus} isProficient={savingThrow.STR.isProficient} />
            <SavingThrow type={'DEX'} bonus={savingThrow.DEX.bonus} isProficient={savingThrow.DEX.isProficient} />
            <SavingThrow type={'CON'} bonus={savingThrow.CON.bonus} isProficient={savingThrow.CON.isProficient} />
            <SavingThrow type={'WIS'} bonus={savingThrow.WIS.bonus} isProficient={savingThrow.WIS.isProficient} />
            <SavingThrow type={'INT'} bonus={savingThrow.INT.bonus} isProficient={savingThrow.INT.isProficient} />
            <SavingThrow type={'CHA'} bonus={savingThrow.CHA.bonus} isProficient={savingThrow.CHA.isProficient} />
            SavingThrows
        </SavingThrowsWrapper>
    );
}

export default SavingThrows;

const SavingThrowsWrapper = styled.div`
  height: 160px;
`;