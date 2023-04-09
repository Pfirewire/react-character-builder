import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {BiggerInput} from "../../styles/BiggerInput.styled";
import {setRace} from "../../../store/slices/characterSlice";

function Race() {
    const dispatch = useDispatch();
    const {race} = useSelector(state => state.character);

    const handleRaceChange = e => {
        dispatch(setRace(e.target.value));
    };

    return(
        <RaceWrapper>
            <BiggerInput value={race} onChange={handleRaceChange} />
            <label>Race</label>
        </RaceWrapper>
    );
}

export default Race;

const RaceWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;