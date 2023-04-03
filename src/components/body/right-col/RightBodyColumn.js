import styled from "styled-components";
import {BodyColumn} from "../../styles/BodyColumn.styled";
import PersonalityTraits from "./PersonalityTraits";
import Ideals from "./Ideals";
import Bonds from "./Bonds";
import Flaws from "./Flaws";
import FeaturesAndTraits from "./FeaturesAndTraits";

function RightBodyColumn() {
    return(
        <BodyColumn>
            <RightBodyColumnWrapper>
                <PersonalityTraits />
                <Ideals />
                <Bonds />
                <Flaws />
                <FeaturesAndTraits />
            </RightBodyColumnWrapper>
        </BodyColumn>
    );
}

export default RightBodyColumn;

const RightBodyColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;