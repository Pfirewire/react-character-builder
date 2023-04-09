import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setAlignment} from "../../../store/slices/characterSlice";
import {BiggerInput} from "../../styles/BiggerInput.styled";

function Alignment() {
    const dispatch = useDispatch();
    const {alignment} = useSelector(state => state.character);

    const handleAlignmentChange = e => {
        dispatch(setAlignment(e.target.value));
    };

    return(
        <AlignmentWrapper>
            <BiggerInput value={alignment} onChange={handleAlignmentChange} />
            <label>Alignment</label>
        </AlignmentWrapper>
    );
}

export default Alignment;

const AlignmentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;