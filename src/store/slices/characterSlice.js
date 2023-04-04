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
    },
});

export const {
    setCharacterName
} = characterSlice.actions;

export const characterReducer = characterSlice.reducer;