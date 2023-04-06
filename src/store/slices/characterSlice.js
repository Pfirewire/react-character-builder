import {createSlice} from "@reduxjs/toolkit";

const characterSlice = createSlice({
    name: 'character',
    initialState: {
        characterName: '',
        classAndLevel: '',
        background: '',
        playerName: '',
        race: '',
        alignment: '',
        xp: [
            0,
            0
        ],
    },
    reducers: {
        setCharacterName(state, action) {
            state.characterName = action.payload;
        },
        setClassAndLevel(state, action) {
            state.classAndLevel = action.payload;
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
        }
    },
});

export const {
    setCharacterName
} = characterSlice.actions;

export const characterReducer = characterSlice.reducer;