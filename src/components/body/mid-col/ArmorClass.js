import styled from "styled-components";
import {useSelector} from "react-redux";

function ArmorClass() {
    const {armorClass} = useSelector(state => state.character);

    return(
        <ArmorClassWrapper>
            <ArmorClassValueWrapper>
                {armorClass}
            </ArmorClassValueWrapper>
            <ArmorClassTextWrapper>
                Armor Class
            </ArmorClassTextWrapper>
        </ArmorClassWrapper>
    );
}

export default ArmorClass;

const ArmorClassWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArmorClassValueWrapper = styled.div`
  flex-grow: 1;
  font-size: 3em;
  display: flex;
  align-items: center;
`;

const ArmorClassTextWrapper = styled.p`
  
`;