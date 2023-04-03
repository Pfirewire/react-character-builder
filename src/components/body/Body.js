import styled from "styled-components";
import LeftBodyColumn from "./stats/LeftBodyColumn";
import {BodyColumn} from "../styles/BodyColumn.styled";
import MiddleBodyColumn from "./mid-col/MiddleBodyColumn";

function Body() {
    return(
        <BodyWrapper>
            <LeftBodyColumn />
            <MiddleBodyColumn />
            <BodyColumn>
                Right Column
            </BodyColumn>
        </BodyWrapper>
    );
}

export default Body;

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
`;