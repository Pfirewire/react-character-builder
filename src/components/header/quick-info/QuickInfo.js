import styled from "styled-components";
import TopQuickInfo from "./TopQuickInfo";
import BottomQuickInfo from "./BottomQuickInfo";

function QuickInfo() {
    return(
        <QuickInfoWrapper>
            <TopQuickInfo />
            <BottomQuickInfo />
        </QuickInfoWrapper>
    );
}

export default QuickInfo;

const QuickInfoWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;