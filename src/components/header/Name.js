import styled from "styled-components";

function Name() {
    return(
        <NameWrapper>
            Character Name
        </NameWrapper>
    );
}

export default Name;

const NameWrapper = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;