import styled from "styled-components";
import {CenteredContainer} from "./styles/CenteredContainer.styled";
import Header from "./Header";
import Body from "./Body";

function CharacterSheet() {
    return(
        <CenteredContainer>
            <CharacterSheetWrapper>
                <Header />
                <Body />
            </CharacterSheetWrapper>
        </CenteredContainer>
    );
}

export default CharacterSheet;

const CharacterSheetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;