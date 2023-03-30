import styled from "styled-components";

function Logo() {
    return(
        <ComponentWrapper>
            DnD Logo
        </ComponentWrapper>
    );
}

export default Logo;

const ComponentWrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;