import {createSlice} from "@reduxjs/toolkit";

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
            STR: {
                name: 'Strength',
                value: 10,
                isProficient: false,
            },
            DEX: {
                name: 'Dexterity',
                value: 10,
                isProficient: true,
            },
            CON: {
                name: 'Constitution',
                value: 10,
                isProficient: false,
            },
            WIS: {
                name: 'Wisdom',
                value: 10,
                isProficient: false,
            },
            INT: {
                name: 'Intelligence',
                value: 10,
                isProficient: false,
            },
            CHA: {
                name: 'Charisma',
                value: 10,
                isProficient: true,
            },
        },
        inspiration: true,
        proficiencyBonus: 0,
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
            state.abilityScore = {
                ...state.abilityScore,
                [action.payload.stat]: {
                    ...state.abilityScore[action.payload.stat],
                    [action.payload.key]: action.payload.value,
                }
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
    setSavingThrow,
} = characterSlice.actions;

export const characterReducer = characterSlice.reducer;