import { createSlice } from '@reduxjs/toolkit';

type Props = {
    data: Array<{ name: string, duration: string, rating: string, id: string }>
}

const initialState: Props = {
    data: [],
};

const listSlice = createSlice({
    name: 'listSlice',
    initialState,
    reducers: {
        addNewItem: (state, { payload }) => {
            state.data.push(payload)
        },
        removeItem: (state, { payload }) => {
            state.data.filter(({ id }) => id !== payload)
        }
    },
});

export const { addNewItem, removeItem } = listSlice.actions;

export default listSlice.reducer;
