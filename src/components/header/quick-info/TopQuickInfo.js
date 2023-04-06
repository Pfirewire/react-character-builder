import styled from "styled-components";
import {QuickInfoWrapper} from "../../styles/QuickInfoWrapper.styled";
import {useSelector, useDispatch} from "react-redux";
import {
    setClass,
    setLevel,
    setBackground,
    setPlayerName,
} from "../../../store/slices/characterSlice";

function TopQuickInfo() {
    const dispatch = useDispatch();
    const {characterName} = useSelector(state => state.character);
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