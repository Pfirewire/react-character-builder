import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {setAbilityScore} from "../../../store/slices/characterSlice";

function AbilityScore({type, score}) {
    const dispatch = useDispatch();

    const handleAbilityScoreChange = e => {
        dispatch(setAbilityScore({stat: type, key: 'score', value: parseInt(e.target.value)}));
    };

    const prettyModifier = () =>{
        const bonus = Math.floor((score-10)/2);
        return `${bonus >=0 ? '+' : ''}${bonus}`;
    };

    return(
        <AbilityScoreContainer>
            <label>{type}</label>
            <AbilityScoreInput type={'number'} width={'3'} value={score} onChange={handleAbilityScoreChange} />
            <ModifierWrapper>{prettyModifier()}</ModifierWrapper>
        </AbilityScoreContainer>
    );
}

export default AbilityScore;

const AbilityScoreContainer = styled.div`
  width: 80px;
  height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AbilityScoreInput = styled.input`
  //::-webkit-outer-spin-button,
  //::-webkit-inner-spin-button {
  //  -webkit-appearance: none;
  //  margin: 0;
  //}
  //&[type=number] {
  //  -moz-appearance: textfield;
  //}
  //&[type="number"]:hover,
  //&[type="number"]:focus {
  //  -moz-appearance: number-input;
  //}
  width: 75px;
  font-size: 2.7em;
  text-align: center;
  padding-top: 6px;
`;

const ModifierWrapper = styled.div`
  font-size: 1.5em;
`;