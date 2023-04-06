import styled from "styled-components";

function Alignment() {
    return(
        <AlignmentWrapper>
            Alignment
        </AlignmentWrapper>
    );
}

export default Alignment;

const AlignmentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;