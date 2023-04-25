import styled from "styled-components";
import {useSelector} from "react-redux";

function Speed() {
    const {speed} = useSelector(state => state.character);

    return(
        <SpeedWrapper>
            <SpeedValueWrapper>
                {speed}ft
            </SpeedValueWrapper>
            <SpeedTextWrapper>
                Speed
            </SpeedTextWrapper>
        </SpeedWrapper>
    );
}

export default Speed;

const SpeedWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpeedValueWrapper = styled.div`
  flex-grow: 1;
  font-size: 3em;
  display: flex;
  align-items: center;
`;

const SpeedTextWrapper = styled.p`
`;