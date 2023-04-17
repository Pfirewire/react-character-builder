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
        skills: [
            {
                name: 'Acrobatics',
                abilityScore: 'DEX',
                isProficient: false,
            },
            {
                name: 'Animal Handling',
                abilityScore: 'WIS',
                isProficient: false,
            },
            {
                name: 'Arcana',
                abilityScore: 'INT',
                isProficient: false,
            },
            {
                name: 'Athletics',
                abilityScore: 'STR',
                isProficient: false,
            },
            {
                name: 'Deception',
                abilityScore: 'CHA',
                isProficient: false,
            },
            {
                name: 'History',
                abilityScore: 'INT',
                isProficient: false,
            },
            {
                name: 'Insight',
                abilityScore: 'WIS',
                isProficient: false,
            },
            {
                name: 'Intimidation',
                abilityScore: 'CHA',
                isProficient: false,
            },
            {
                name: 'Investigation',
                abilityScore: 'INT',
                isProficient: false,
            },
            {
                name: 'Medicine',
                abilityScore: 'WIS',
                isProficient: false,
            },
            {
                name: 'Nature',
                abilityScore: 'INT',
                isProficient: false,
            },
            {
                name: 'Perception',
                abilityScore: 'WIS',
                isProficient: false,
            },
            {
                name: 'Performance',
                abilityScore: 'CHA',
                isProficient: false,
            },
            {
                name: 'Persuasion',
                abilityScore: 'CHA',
                isProficient: false,
            },
            {
                name: 'Religion',
                abilityScore: 'INT',
                isProficient: false,
            },
            {
                name: 'Slight of Hand',
                abilityScore: 'DEX',
                isProficient: false,
            },
            {
                name: 'Stealth',
                abilityScore: 'DEX',
                isProficient: false,
            },
            {
                name: 'Survival',
                abilityScore: 'WIS',
                isProficient: false,
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
    setSavingThrow,
} = characterSlice.actions;

export const characterReducer = characterSlice.reducer;