import { configureStore, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'theme',
    initialState: {
        themeMode: 'light',
    },
    reducers: {
        toggleTheme: (state) => {
            state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
        },
        setTheme: (state, { payload }) => {
            state.themeMode = payload;
        },
    }
});

export const selector = state => state.theme;
export const actions = slice.actions;

const store = configureStore({
    reducer: {
        theme:  slice.reducer
    }
});


export default store;

