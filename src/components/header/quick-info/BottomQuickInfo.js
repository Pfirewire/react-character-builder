import styled from "styled-components";
import {QuickInfoWrapper} from "../../styles/QuickInfoWrapper.styled";
import Race from "./Race";
import Alignment from "./Alignment";
import XP from "./XP";

function BottomQuickInfo() {
    return(
    <BottomQuickInfoWrapper>
        <Race />
        <Alignment />
        <XP />
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