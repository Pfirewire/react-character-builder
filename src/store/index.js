import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {
    characterReducer,
    setCharacterName
} from "./slices/characterSlice";

const store = configureStore({
    reducer: {
        character: characterReducer,
    },
});

setupListeners(store.dispatch);

export {
    store,
    setCharacterName
};