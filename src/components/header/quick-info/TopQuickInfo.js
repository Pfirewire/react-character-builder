import styled from "styled-components";
import {QuickInfoWrapper} from "../../styles/QuickInfoWrapper.styled";
import {useSelector, useDispatch} from "react-redux";

function TopQuickInfo() {
    return(
        <TopQuickInfoWrapper>
            <QuickInfoWrapper>
                Class & Level
            </QuickInfoWrapper>
            <QuickInfoWrapper>
                Background
            </QuickInfoWrapper>
            <QuickInfoWrapper>
                Player Name
            </QuickInfoWrapper>
        </TopQuickInfoWrapper>
    );
}

export default TopQuickInfo;

const TopQuickInfoWrapper = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: stretch;
`;