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
        updateCharacterName(state, action) {
            state.characterName = action;
        },
    },
});

export const {
    updateCharacterName
} = characterSlice.actions;

export const characterSliceReducer = characterSlice.reducer;