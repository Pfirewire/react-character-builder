import styled from "styled-components";
import Logo from "./Logo";
import Name from "./Name";

function NameAndLogo() {
    return(
        <NameAndLogoWrapper>
            <Logo />
            <Name />
        </NameAndLogoWrapper>
    );
}

export default NameAndLogo;

const NameAndLogoWrapper = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;