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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;