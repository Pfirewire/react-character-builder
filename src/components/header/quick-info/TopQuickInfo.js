import styled from "styled-components";
import {QuickInfoWrapper} from "../../styles/QuickInfoWrapper.styled";
import {useSelector, useDispatch} from "react-redux";
import ClassAndLevel from "./ClassAndLevel";
import Background from "./Background";
import PlayerName from "./PlayerName";

function TopQuickInfo() {
    const dispatch = useDispatch();
    const {characterName} = useSelector(state => state.character);
    return(
        <TopQuickInfoWrapper>
            <QuickInfoWrapper>
                <ClassAndLevel />
            </QuickInfoWrapper>
            <QuickInfoWrapper>
                <Background />
            </QuickInfoWrapper>
            <QuickInfoWrapper>
                <PlayerName />
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