import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setInspiration} from "../../../store/slices/characterSlice";

function Inspiration() {
    const dispatch = useDispatch();
    const {inspiration} = useSelector(state => state.character);

    const handleInspirationChange = e => {
        dispatch(setInspiration(e.target.checked));
    };

    return(
        <InspirationWrapper>
            <CheckboxInput type={'checkbox'} checked={inspiration} onChange={handleInspirationChange} />
            <label>Inspiration</label>
        </InspirationWrapper>
    );
}

export default Inspiration;

const InspirationWrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxInput = styled.input`
  width: 30px;
`;