import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    num: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.num += action.payload
        },
        decrement: (state, action) => {
            if(state.num >= 20) {
                state.num -= action.payload
            }
        },
        reset: (state) => {
            state.num = 0
        },
    }
})

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;