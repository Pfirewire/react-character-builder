import styled from "styled-components";

function Background() {
    return(
        <BackgroundWrapper>
            Background
        </BackgroundWrapper>
    );
}

export default Background;

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;