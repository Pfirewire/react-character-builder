import styled from "styled-components";
import {QuickInfoWrapper} from "../../styles/QuickInfoWrapper.styled";
import Race from "./Race";
import Alignment from "./Alignment";
import XP from "./XP";

function BottomQuickInfo() {
    return(
    <BottomQuickInfoWrapper>
        <QuickInfoWrapper>
            <Race />
        </QuickInfoWrapper>
        <QuickInfoWrapper>
            <Alignment />
        </QuickInfoWrapper>
        <QuickInfoWrapper>
            <XP />
        </QuickInfoWrapper>
    </BottomQuickInfoWrapper>
    );
}

export default BottomQuickInfo;

const BottomQuickInfoWrapper = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: stretch;
`;