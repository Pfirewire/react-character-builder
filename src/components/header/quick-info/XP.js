import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

function XP() {
    const dispatch = useDispatch();
    const {xp} = useSelector(state => state.character);
    return(
        <XPWrapper>
            XP
        </XPWrapper>
    );
}

export default XP;

const XPWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;