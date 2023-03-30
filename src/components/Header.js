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
  
`;