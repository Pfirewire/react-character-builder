import styled from "styled-components";
import {setBackground} from "../../../store/slices/characterSlice";
import {useDispatch, useSelector} from "react-redux";
import {BiggerInput} from "../../styles/BiggerInput.styled";

function Background() {
    const dispatch = useDispatch();
    const {background} = useSelector(state => state.character);

    const handleBackgroundChange = e => {
        dispatch(setBackground(e.target.value));
    };

    return(
        <BackgroundWrapper>
            <BiggerInput value={background} onChange={handleBackgroundChange} />
            <label>Background</label>
        </BackgroundWrapper>
    );
}

export default Background;

const BackgroundWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`;