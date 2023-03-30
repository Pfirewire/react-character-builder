import styled from "styled-components";
import {CenteredContainer} from "./styles/CenteredContainer.styled";
import Header from "./header/Header";
import Body from "./Body";

function CharacterSheet() {
    return(
        <CharacterSheetWrapper>
            <Header />
            <Body />
        </CharacterSheetWrapper>
    );
}

export default CharacterSheet;

const CharacterSheetWrapper = styled.div`
  width: 1000px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;