import styled from "styled-components";
import SavingThrow from "./SavingThrow";
import {useSelector} from "react-redux";

function SavingThrows() {
    const {abilityScore} = useSelector(state => state.character);

    const renderSavingThrows = () => {
        let renderedSavingThrows = [];
        for(const key of Object.entries(abilityScore)) {
            renderedSavingThrows.push(
                <SavingThrow
                    key={key[0]}
                    type={key[0]}
                    name={abilityScore[key[0]].name}
                    abilityScore={abilityScore[key[0]].value}
                    isProficient={abilityScore[key[0]].isProficient}
                />
            );
        }
        return renderedSavingThrows;
    }

    return(
        <SavingThrowsWrapper>
            {renderSavingThrows()}
            <p>SavingThrows</p>
        </SavingThrowsWrapper>
    );
}

export default SavingThrows;

const SavingThrowsWrapper = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;