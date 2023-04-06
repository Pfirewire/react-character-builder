import CharacterSheet from "./components/CharacterSheet";
import styled from "styled-components";

function App() {
    return(
        <CharacterSheetWrapper>
            <CharacterSheet />
        </CharacterSheetWrapper>
    );
}

export default App;

const CharacterSheetWrapper = styled.div`
  margin: 5rem;
`;