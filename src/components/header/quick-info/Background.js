import styled from "styled-components";
import {setBackground} from "../../../store/slices/characterSlice";
import {useDispatch, useSelector} from "react-redux";

function Background() {
    const dispatch = useDispatch();
    const {background} = useSelector(state => state.character);

    const handleBackgroundChange = e => {
        dispatch(setBackground(e.target.value));
    };

    return(
        <BackgroundWrapper>
            <label>Background:</label>
            <input value={background} onChange={handleBackgroundChange} />
        </BackgroundWrapper>
    );
}

export default Background;

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;