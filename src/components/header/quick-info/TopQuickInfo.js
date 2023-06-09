import styled from "styled-components";
import {QuickInfoWrapper} from "../../styles/QuickInfoWrapper.styled";
import ClassAndLevel from "./ClassAndLevel";
import Background from "./Background";
import PlayerName from "./PlayerName";

function TopQuickInfo() {
    return(
        <TopQuickInfoWrapper>
            <ClassAndLevel />
            <Background />
            <PlayerName />
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