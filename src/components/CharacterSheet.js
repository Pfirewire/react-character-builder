import styled from "styled-components";
import {CenteredContainer} from "./styles/CenteredContainer.styled";
import Header from "./Header";
import Body from "./Body";

function CharacterSheet() {
    return(
        <CenteredContainer>
            <Header />
            <Body />
        </CenteredContainer>
    );
}

export default CharacterSheet;

const CharacterSheetWrapper = styled.div`
  
`;