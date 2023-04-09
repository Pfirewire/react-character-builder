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
        str: 10,
        dex: 10,
        con: 10,
        wis: 10,
        int: 10,
        cha: 10,
        inspiration: false,
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
        setStr(state, action) {
            state.str = action.payload;
        },
        setDex(state, action) {
            state.dex = action.payload;
        },
        setCon(state, action) {
            state.con = action.payload;
        },
        setWis(state, action) {
            state.wis = action.payload;
        },
        setInt(state, action) {
            state.int = action.payload;
        },
        setCha(state, action) {
            state.cha = action.payload;
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
    setStr,
    setDex,
    setCon,
    setWis,
    setInt,
    setCha,
    setInspiration,
    setProficiencyBonus,
} = characterSlice.actions;

export const characterReducer = characterSlice.reducer;