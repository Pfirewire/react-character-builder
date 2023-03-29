import AbilityScore from "./AbilityScore";

function AbilityScoreContainer() {
    return(
        <div>
            <AbilityScore type={'STR'} />
            <AbilityScore type={'DEX'} />
            <AbilityScore type={'CON'} />
            <AbilityScore type={'WIS'} />
            <AbilityScore type={'INT'} />
            <AbilityScore type={'CHA'} />
        </div>
    );
}

export default AbilityScoreContainer;