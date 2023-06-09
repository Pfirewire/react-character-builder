import {createSlice} from "@reduxjs/toolkit";
import {calculateBonus} from "../../util/calculateBonus";

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
                bonus: 0,
                isProficient: false,
                skills: [
                    {
                        name: 'Athletics',
                        additionalModifiers: [
                        ]
                    },
                ],
            },
            DEX: {
                name: 'Dexterity',
                score: 10,
                bonus: 0,
                isProficient: true,
                skills: [
                    {
                        name: 'Acrobatics',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'Slight of Hand',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'Stealth',
                        additionalModifiers: [
                        ]
                    },
                ],
            },
            CON: {
                name: 'Constitution',
                score: 10,
                bonus: 0,
                isProficient: false,
                skills: [
                ],
            },
            WIS: {
                name: 'Wisdom',
                score: 10,
                bonus: 0,
                isProficient: false,
                skills: [
                    {
                        name: 'Animal Handling',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'Insight',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'Medicine',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'Perception',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'Survival',
                        additionalModifiers: [
                        ]
                    },
                ],
            },
            INT: {
                name: 'Intelligence',
                score: 10,
                bonus: 0,
                isProficient: false,
                skills: [
                    {
                        name: 'Arcana',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'History',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'Investigation',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'Nature',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'Religion',
                        additionalModifiers: [
                        ]
                    },
                ],
            },
            CHA: {
                name: 'Charisma',
                score: 10,
                bonus: 0,
                isProficient: true,
                skills: [
                    {
                        name: 'Deception',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'Intimidation',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'Performance',
                        additionalModifiers: [
                        ]
                    },
                    {
                        name: 'Persuasion',
                        additionalModifiers: [
                        ]
                    },
                ],
            },
        },
        inspiration: true,
        proficiencyBonus: 0,
        armorClass: 10,
        speed: 30,
        hp: [
            10,
            10
        ],
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
            state.abilityScore[action.payload.stat].bonus = calculateBonus(state.abilityScore[action.payload.stat].score);
        },
        setInspiration(state, action) {
            state.inspiration = action.payload;
        },
        setProficiencyBonus(state, action) {
            state.proficiencyBonus = action.payload;
        },
        setArmorClass(state, action) {
            state.armorClass = action.payload;
        },
        setCurrentHP(state, action) {
            state.hp[0] = action.payload;
        },
        setMaximumHP(state, action) {
            state.hp[1] = action.payload;
        }
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
    setArmorClass,
    setCurrentHP,
    setMaximumHP
} = characterSlice.actions;

export const characterReducer = characterSlice.reducer;