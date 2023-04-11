import {createSlice} from "@reduxjs/toolkit";
import abilityScore from "../../components/body/stats/AbilityScore";

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        characterName: '',
        characterClass: '',
        level: 1,
        background: '',
        playerName: '',
        race: '',
        alignment: '',
        xp: [
            0,
            0
        ],
        abilityScore: {
            STR: 10,
            DEX: 10,
            CON: 10,
            WIS: 10,
            INT: 10,
            CHA: 10,
        },
        inspiration: false,
        proficiencyBonus: 0,
        savingThrow: {
            STR: {
                bonus: 0,
                isProficient: false,
            },
            DEX: {
                bonus: 0,
                isProficient: false,
            },
            CON: {
                bonus: 0,
                isProficient: false,
            },
            WIS: {
                bonus: 0,
                isProficient: false,
            },
            INT: {
                bonus: 0,
                isProficient: false,
            },
            CHA: {
                bonus: 0,
                isProficient: false,
            },
        },
    },
    reducers: {
        setCharacterName(state, action) {
            state.characterName = action.payload;
        },
        setCharacterClass(state, action) {
            state.characterClass = action.payload;
        },
        setLevel(state, action) {
            state.level = action.payload;
        },
        setBackground(state, action) {
            state.background = action.payload;
        },
        setPlayerName(state, action) {
            state.playerName = action.payload;
        },
        setRace(state, action) {
            state.race = action.payload;
        },
        setAlignment(state, action) {
            state.alignment = action.payload;
        },
        setXP(state, action) {
            state.xp[0] = action.payload;
        },
        setXPMax(state, action) {
            state.xp[1] = action.payload;
        },
        setAbilityScore(state, action) {
            console.log(action.payload);
            state.abilityScore = {
                ...state.abilityScore,
                [action.payload.key]: parseInt(action.payload.value),
            };
        },
        setInspiration(state, action) {
            state.inspiration = action.payload;
        },
        setProficiencyBonus(state, action) {
            state.proficiencyBonus = action.payload;
        },
    },
});

export const {
    setCharacterName,
    setCharacterClass,
    setLevel,
    setBackground,
    setPlayerName,
    setRace,
    setAlignment,
    setXP,
    setXPMax,
    setAbilityScore,
    setInspiration,
    setProficiencyBonus,
} = characterSlice.actions;

export const characterReducer = characterSlice.reducer;