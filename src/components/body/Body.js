import styled from "styled-components";
import LeftBodyColumn from "./stats/LeftBodyColumn";
import {BodyColumn} from "../styles/BodyColumn.styled";
import MiddleBodyColumn from "./mid-col/MiddleBodyColumn";
import RightBodyColumn from "./right-col/RightBodyColumn";

function Body() {
    return(
        <BodyWrapper>
            <LeftBodyColumn />
            <MiddleBodyColumn />
            <RightBodyColumn />
        </BodyWrapper>
    );
}

export default Body;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
`;