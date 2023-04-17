import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setAbilityScore} from "../../../store/slices/characterSlice";
import {AbilityScoreInput} from "../../styles/AbilityScoreInput.styled";

function AbilityScore({type, score}) {
    const dispatch = useDispatch();

    const handleAbilityScoreChange = e => {
        dispatch(setAbilityScore({stat: type, key: 'value', value: parseInt(e.target.value)}));
    };

    const prettyModifier = () =>{
        const bonus = Math.floor((score-10)/2);
        return `${bonus >=0 ? '+' : ''}${bonus}`;
    };

    return(
        <AbilityScoreContainer>
            <AbilityScoreInput type={'number'} width={'3'} value={score} onChange={handleAbilityScoreChange} />
            <label>{type}</label>
            <div>{prettyModifier()}</div>
        </AbilityScoreContainer>
    );
}

export default AbilityScore;

const AbilityScoreContainer = styled.div`
  width: 80px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;