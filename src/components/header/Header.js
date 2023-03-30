import styled from "styled-components";
import NameAndLogo from "./NameAndLogo";
import QuickInfo from "./QuickInfo";

function Header() {
    return(
        <HeaderWrapper>
            <NameAndLogo />
            <QuickInfo />
        </HeaderWrapper>
    );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 100px;
  width: 100%;
`;