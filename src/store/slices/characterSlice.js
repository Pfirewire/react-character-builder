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
                score: 10,
                isProficient: false,
            },
            DEX: {
                name: 'Dexterity',
                score: 10,
                isProficient: true,
            },
            CON: {
                name: 'Constitution',
                score: 10,
                isProficient: false,
            },
            WIS: {
                name: 'Wisdom',
                score: 10,
                isProficient: false,
            },
            INT: {
                name: 'Intelligence',
                score: 10,
                isProficient: false,
            },
            CHA: {
                name: 'Charisma',
                score: 10,
                isProficient: true,
            },
        },
        inspiration: true,
        proficiencyBonus: 0,
        skills: [
            {
                name: 'Acrobatics',
                abilityScore: 'DEX',
            },
            {
                name: 'Animal Handling',
                abilityScore: 'WIS',
            },
            {
                name: 'Arcana',
                abilityScore: 'INT',
            },
            {
                name: 'Athletics',
                abilityScore: 'STR',
            },
            {
                name: 'Deception',
                abilityScore: 'CHA',
            },
            {
                name: 'History',
                abilityScore: 'INT',
            },
            {
                name: 'Insight',
                abilityScore: 'WIS',
            },
            {
                name: 'Intimidation',
                abilityScore: 'CHA',
            },
            {
                name: 'Investigation',
                abilityScore: 'INT',
            },
            {
                name: 'Medicine',
                abilityScore: 'WIS',
            },
            {
                name: 'Nature',
                abilityScore: 'INT',
            },
            {
                name: 'Perception',
                abilityScore: 'WIS',
            },
            {
                name: 'Performance',
                abilityScore: 'CHA',
            },
            {
                name: 'Persuasion',
                abilityScore: 'CHA',
            },
            {
                name: 'Religion',
                abilityScore: 'INT',
            },
            {
                name: 'Slight of Hand',
                abilityScore: 'DEX',
            },
            {
                name: 'Stealth',
                abilityScore: 'DEX',
            },
            {
                name: 'Survival',
                abilityScore: 'WIS',
            },
        ]
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
} = characterSlice.actions;

export const characterReducer = characterSlice.reducer;